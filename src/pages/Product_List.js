import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/Box.css";
import { Widget } from "react-chat-widget";
import Card from "react-bootstrap/Card";
import { Button, Breadcrumb, Row, Col } from "react-bootstrap";
import image1 from "../assets/starryNight.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/starryNight.jpg";
import product from "../assets/starryNight.jpg";
import starryNight from "../assets/starryNight.jpg";

const styles = {
  cardGroup: {
    margin: "1rem",
  },
  card: {
    borderRadius: 10,
    padding: "5px",
    width: "18rem",
  },
  cardImage: {
    objectFit: "cover",
    borderRadius: 0,
    height: "80%",
    width: "auto",
    padding: "5px",
  },
  breadCrumb: {},
  button: {},
};

export const Product_List = () => {
  const [products, setProducts] = useState([]);

  // let decodeddata = decode(localStorage.getItem("token"));

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
        "http://localhost:5000/api/product/",
        config
      );
      setProducts(response.data);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="product_list container">
        <Breadcrumb className="">
          <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <div className="grid">
          {products.map(Product)}
          {/* <Product prod={p} key={p._id} />))} */}
        </div>
      </div>
    </div>
  );
};

const Product = (prod, index) => {
  return (
    <>
      <Card style={styles.card} key={index} className="box">
        <Card.Img variant="top" src={prod.photo} style={styles.cardImage} />
        <Card.Body>
          <Card.Text>{prod.title}</Card.Text>
          <Card.Title>C${prod.price}</Card.Title>
        </Card.Body>
        <div className="mb-2">
          <Button variant="warning" size="sm" link="/product/{prod.title}">
            Buy Now
          </Button>
        </div>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Widget />
    </>
  );
};

export default Product_List;
// return (
//   <div class="product_list container">
//     <Breadcrumb className="">
//       <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
//       <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
//       <Breadcrumb.Item active>Data</Breadcrumb.Item>
//     </Breadcrumb>
//     <div class="container">
//       <CardGroup className="mb-4">
//         <Card className="m-2" style={styles.card}>
//           <Card.Img
//             variant="top"
//             src={starryNight}
//             style={styles.cardImage}
//           />
//           <Card.Body>
//             <Card.Text>Starry Night painting</Card.Text>
//             <Card.Title>C$30000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img variant="top" src={image1} style={styles.cardImage} />
//           <Card.Body>
//             <Card.Text>ABC</Card.Text>
//             <Card.Title>C$20000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img variant="top" src={image3} style={styles.cardImage} />
//           <Card.Body>
//             <Card.Text>ABC</Card.Text>
//             <Card.Title>C$150.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img
//             variant="top"
//             src={starryNight}
//             style={styles.cardImage}
//           />
//           <Card.Body>
//             <Card.Text>Starry Night painting</Card.Text>
//             <Card.Title>C$30000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>
//       <CardGroup className="mb-4">
//         <Card className="m-2" style={styles.card}>
//           <Card.Img
//             variant="top"
//             src={starryNight}
//             style={styles.cardImage}
//           />
//           <Card.Body>
//             <Card.Text>Starry Night painting</Card.Text>
//             <Card.Title>C$30000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img variant="top" src={image1} style={styles.cardImage} />
//           <Card.Body>
//             <Card.Text>ABC</Card.Text>
//             <Card.Title>C$20000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img variant="top" src={image3} style={styles.cardImage} />
//           <Card.Body>
//             <Card.Text>ABC</Card.Text>
//             <Card.Title>C$150.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img
//             variant="top"
//             src={starryNight}
//             style={styles.cardImage}
//           />
//           <Card.Body>
//             <Card.Text>Starry Night painting</Card.Text>
//             <Card.Title>C$30000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>
//       <CardGroup className="mb-4">
//         <Card className="m-2" style={styles.card}>
//           <Card.Img
//             variant="top"
//             src={starryNight}
//             style={styles.cardImage}
//           />
//           <Card.Body>
//             <Card.Text>Starry Night painting</Card.Text>
//             <Card.Title>C$30000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img variant="top" src={image1} style={styles.cardImage} />
//           <Card.Body>
//             <Card.Text>ABC</Card.Text>
//             <Card.Title>C$20000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img variant="top" src={image3} style={styles.cardImage} />
//           <Card.Body>
//             <Card.Text>ABC</Card.Text>
//             <Card.Title>C$150.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//         <Card className="m-2" style={styles.card}>
//           <Card.Img
//             variant="top"
//             src={starryNight}
//             style={styles.cardImage}
//           />
//           <Card.Body>
//             <Card.Text>Starry Night painting</Card.Text>
//             <Card.Title>C$30000.00</Card.Title>
//           </Card.Body>
//           <div className="mb-2">
//             <Button variant="success" size="sm">
//               Place Bid
//             </Button>{" "}
//             <Button variant="warning" size="sm">
//               Buy Now
//             </Button>
//           </div>
//           <Card.Footer>
//             <small className="text-muted">Last updated 3 mins ago</small>
//           </Card.Footer>
//         </Card>
//       </CardGroup>
//     </div>
//   </div>
// );
// };
