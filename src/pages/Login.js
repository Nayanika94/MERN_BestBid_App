import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFromDate] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

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
      email: email,
      password: password,
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
<<<<<<< HEAD
    <div class="d-flex justify-content-center">
      <h3>Log in</h3>

      <form class="m-5 w-50" onSubmit={(e) => onSubmit(e)}>
=======
    <div className="d-flex justify-content-center">
      <h3>Log in</h3>

      <form className="m-5 w-50" onSubmit={(e) => onSubmit(e)}>
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Login
        </button>
        <p className="forgot-password text-right">
          <a href="/">Forgot password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
