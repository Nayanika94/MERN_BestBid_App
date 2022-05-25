import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/Box.css";
import { Widget } from "react-chat-widget";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import Search from "../components/Search";

const styles = {
  cardGroup: {
    margin: "1rem",
  },
  card: {
    borderRadius: 10,
    textAlign: "center",
    padding: "5px",
    maxWidth: "275px",
  },
  cardImage: {
    objectFit: "contain",
    borderRadius: 0,
    maxHeight: "25vh",
    width: "auto",
    padding: "0px",
  },
  breadCrumb: {},
  button: {},
};

export const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchByName, setSearchByName] = useState("");

  const filterProduct = (name) => {
    name ? setSearchByName(name) : setSearchByName("");
  };


  //------------filtering products and setting the filtered products state---------
  useEffect(() => {
    if (products.length) {
      let nameValue = searchByName.toLowerCase().trim();
      if (nameValue) {
        const filteredProducts = products.filter((p) => {
          return p.title.toLowerCase().includes(nameValue);
        });
        setFilteredProducts(filteredProducts);
      } else setFilteredProducts(products);
    }
  }, [searchByName, products]);


  useEffect(() => {
    sendGetRequest();
  }, []);

  //-----------using axios to fetch the api------------
  const sendGetRequest = async () => {
    try {
      let token = localStorage.getItem("token");

      let config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
      };

      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/api/product/",
        config
      );
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="product_list container">
        <Search onFilterProduct={filterProduct} />
        <div className="grid">
          {filteredProducts.map(Product)}
        </div>
        <Widget />
      </div>
    </div>
  );
};

const Product = (prod) => {
  return (
    <>
      <Card style={styles.card} key={prod._id} className="box">
        <Card.Img variant="top" src={prod.photo} style={styles.cardImage} />
        <Card.Body>
          <Card.Text>{prod.title}</Card.Text>
          <Card.Title>C${prod.price}</Card.Title>
        </Card.Body>
        <div className="mb-2">
          <Button
            style={{ textTransform: "uppercase" }}
            variant="warning"
            size="sm"
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={`/product/${prod._id}`}
            >
              Buy Now
            </Link>
          </Button>
        </div>
      </Card>
    </>
  );
};

export default ProductList;
