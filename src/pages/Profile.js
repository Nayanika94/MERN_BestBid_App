import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col, Tabs, Tab, Table } from "react-bootstrap";
import image1 from "../assets/image1.jpg";
import decode from "jwt-decode";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState([]);
  const [products, setProducts] = useState([]);
  const [bids, setBids] = useState([]);

  let decodeddata = decode(localStorage.getItem("token"));
  let imagepath = decodeddata.user.profileImage;
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
        process.env.REACT_APP_API_URL + "/api/auth?",
        config
      );
      setProfile(response.data);

      const response1 = await axios.get(
        process.env.REACT_APP_API_URL +
          `/api/productsSold/${decodeddata.user.id}`,
        config
      );
      setProducts(response1.data);

      const response2 = await axios.get(
        process.env.REACT_APP_API_URL +
          `/api/bid/byUser/${decodeddata.user.id}`,
        config
      );
      setBids(response2.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="container mt-2 mb-2">
      <Row className="g-4">
        <Col sm={3}>
          <Card>
            <Card.Img variant="top" src={profile.photo} />
            <Card.Body>
              <Card.Title>{profile.username}</Card.Title>
              <Button href="/edit-profile" variant="primary">
                Edit
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={9}>
          <Card className="mb-2">
            <Card.Body>
              <Row>
                <Col sm={4}>Full Name</Col>
                <Col>{profile.name}</Col>
              </Row>
              <hr />
              <Row>
                <Col sm={4}>Email</Col>
                <Col>{profile.email}</Col>
              </Row>
              <hr />
              <Row>
                <Col sm={4}>Phone</Col>
                <Col>{profile.phone}</Col>
              </Row>
              <hr />
              <Row>
                <Col sm={4}>Address</Col>
                <Col>{profile.address}</Col>
              </Row>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Tabs
                defaultActiveKey="purchased"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="purchased" title="Purchased Items">
                  <div>
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Product Id</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {products.map((t) => (
                          <Product product={t} key={t._id} />
                        ))}
                      </tbody>
                    </Table>
                  </div>
                </Tab>
                <Tab eventKey="bid" title="Total Bid">
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Product Id</th>
                        <th>Bid</th>
                      </tr>
                    </thead>
                    <tbody>
                      {bids.map((t) => (
                        <Bid bid={t} key={t._id} />
                      ))}
                    </tbody>
                  </Table>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

const Product = ({ product }) => {
  return (
    <tr>
      <td>{product._id}</td>
      <td>{product.price}</td>
    </tr>
  );
};

const Bid = ({ bid }) => {
  return (
    <tr>
      <td>{bid.productId}</td>
      <td>{bid.bid}</td>
    </tr>
  );
};

export default Profile;
