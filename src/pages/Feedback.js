import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";
import AuthContext from "../context/AuthContext";

const Feedback = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFromDate] = useState({
    email: "",
    password: "",
  });
  const { name, lastname,  email, feedback } = formData;

  const onChange = (e) => {
    setFromDate({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = {
    name: name,
    lastname: lastname,
    email: email,
    feedback: feedback,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth",
        data,
        config
      );

      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div class="d-flex justify-content-center">
      <h3>Feedback</h3>

      <form class="m-5 w-50" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter your name"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="lastname"
            className="form-control"
            placeholder="Enter your last name"
            name="lastname"
            value={lastname}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Feedback</label>
          <input
            type="feedback"
            className="form-control"
            placeholder="Enter your feedback"
            name="feedback"
            value={feedback}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Feedback
        </button>
       
      </form>
    </div>
  );
};

export default Feedback;