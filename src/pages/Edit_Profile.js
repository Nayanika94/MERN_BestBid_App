import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Breadcrumb, Card, Button, Row, Col, Tabs, Tab } from "react-bootstrap";
import image1 from "../assets/image1.jpg";
import axios from "axios";
import decode from "jwt-decode";
import AuthContext from "../context/AuthContext";

const Edit_Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const { name, email, phone, address } = profile;

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  let decodeddata = decode(localStorage.getItem("token"));
  useEffect(() => {
    sendGetRequest();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");
    let config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    };
    try {
      const response = await axios.put(
        "http://localhost:5000/api/user",
        profile,
        config
      );

      navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
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
                Change Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={9}>
          <Card className="mb-2">
            <form class="m-5 w-50" onSubmit={(e) => onSubmit(e)}>
              <Card.Body>
                <Row>
                  <Col sm={4}>Full Name</Col>
                  <Col>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter full name"
                      name="name"
                      value={profile.name}
                      onChange={(e) => onChange(e)}
                    />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={4}>Email</Col>
                  <Col>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email"
                      name="email"
                      value={profile.email}
                      onChange={(e) => onChange(e)}
                    />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={4}>Phone</Col>
                  <Col>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone"
                      name="phone"
                      value={profile.phone}
                      onChange={(e) => onChange(e)}
                    />
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col sm={4}>Address</Col>
                  <Col>
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Enter address"
                      name="address"
                      value={profile.address}
                      onChange={(e) => onChange(e)}
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col>
                    <Button type="submit" className="btn btn-success mr-5">
                      Submit
                    </Button>
                    <Button href="/profile" className="btn btn-secondary">
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Edit_Profile;
