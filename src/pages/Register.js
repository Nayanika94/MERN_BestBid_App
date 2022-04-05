import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import decode from "jwt-decode";
import AuthContext from "../context/AuthContext";

export const Register = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData2, setFromDate] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const { email, username, password, confirmPassword } = formData2;

  const onChange = (e) => {
    setFromDate({ ...formData2, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/registerUser",
        data,
        config
      );

      console.log(response);
      localStorage.setItem("token", response.data.token);
      console.log(decode(response.data.token));
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="m-5 w-50" onSubmit={(e) => onSubmit(e)}>
        <h3>Register</h3>

        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
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
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter confirm password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => onChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
