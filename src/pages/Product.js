import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';


const Product = (props) => {


  let { id } = useParams();
  const [product, setProduct] = useState([]);


  useEffect(() => {
    sendGetRequest();
  }, []);

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
        `http://localhost:5000/api/product/${id}`,
        config
      );
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">
      <div className="container m-auto">
        <div className="m-4 mainWindow shadow bg-white-rounded p-1">
          <div className="d-flex flex-row flex-no-wrap bg-1">
            <div className="flex-grow-1 m-2">
              {/* <img className="product-img p-2"  /> */}
            </div>
            <div className="flex-grow-1 m-2 p-1">
              <div className="d-flex flex-column">
                <div className="desc p-1 d-flex justify-content-between">
                  <h4> {product.title} </h4>
                  <h4>C${product.price}</h4>
                </div>
                <div className="seller-name p-1">
                  <small>{product.date}</small>
                </div>
                <div className="item-desc">
                  {product.description}
                </div>
                <div className="sizes mt-1 pr-1">
                  <br />
                  <button
                    type="button"
                    className="btn btn-xs mb-1 btn-primary mr-3"
                  >
                    Place Bid
                  </button>
                  <input type="number" placeholder="Min C$30000.00" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
