import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Row, Col, Modal } from "react-bootstrap";
import axios from "axios";


const EditProfile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
      await axios.put(
        process.env.REACT_APP_API_URL + "/api/user",
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
        process.env.REACT_APP_API_URL + "/api/auth?",
        config
      );
      setProfile(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(null);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      console.log("picture: ", e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const updateProfilePicture = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("photo", picture);

      let token = localStorage.getItem("token");

      let config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-auth-token": token,
        },
      };
      await axios.post(
        process.env.REACT_APP_API_URL + "/api/user/uploadPicture",
        config,
        data
      );

      // navigate("/profile");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mt-2 mb-2">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="previewComponent">
            <form onSubmit={(e) => updateProfilePicture(e)}>
              <input
                className="fileInput"
                type="file"
                name="photo"
                onChange={onChangePicture}
              />
              <button className="pictureUploadButton" type="submit">
                Upload Image
              </button>
            </form>
            <div className="imgPreview">
              {imgData !== "" ? (
                <img className="profilePreview" src={imgData} alt=" " />
              ) : (
                <div className="previewText">
                  Please select an Image for Preview
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Row className="g-4">
        <Col sm={3}>
          <Card>
            <Card.Img variant="top" src={profile.photo} />
            <Card.Body>
              <Card.Title>{profile.username}</Card.Title>
              <Button variant="primary" className="mr-2" onClick={handleShow}>
                Change Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={9}>
          <Card className="mb-2">
            <form className="m-5 w-50" onSubmit={(e) => onSubmit(e)}>
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

export default EditProfile;
