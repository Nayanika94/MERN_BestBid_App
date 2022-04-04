import React, { useState, useEffect } from "react";
import { Breadcrumb, Card, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
import image1 from "../assets/image1.jpg";
import decode from "jwt-decode";
import axios from "axios";

const Profile = () => {
  const [profile, setProfile] = useState([]);

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
        "http://localhost:5000/api/auth?",
        config
      );
      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="container mt-2 mb-2">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>

      <Row className="g-4">
        <Col sm={3}>
          <Card>
            <Card.Img variant="top" src={image1} />
            <Card.Body>
              <Card.Title>{profile.username}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary" className="mr-2">
                Message
              </Button>
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
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Tab>
                <Tab eventKey="bid" title="Total Bid">
                  <p>This is total bids</p>
                </Tab>
                <Tab eventKey="wallet" title="Wallet">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard
                    McClintock, a Latin professor at Hampden-Sydney College in
                    Virginia, looked up one of the more obscure Latin words,
                    consectetur, from a Lorem Ipsum passage, and going through
                    the cites
                  </p>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Profile;
