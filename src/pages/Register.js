import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { Alert } from "react-bootstrap";

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
  const [errorMessage, setErrorMessage] = useState();

  const onChange = (e) => {
    setFromDate({ ...formData2, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    let config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    const data = new FormData();
    data.append("username", username);
    data.append("email", email);
    data.append("password", password);
    try {
      const response = await axios.post(
        process.env.REACT_APP_API_URL + "/api/registerUser",
        data,
        config
      );

      localStorage.setItem("token", response.data.token);
      auth.login();
      navigate("/");
    } catch (err) {
      console.log(err.response.data.errors[0].msg);
      for (const error of err.response.data.errors) {
        setErrorMessage(errorMessage + "\n" + error.msg);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <form className="m-5 w-50" onSubmit={(e) => onSubmit(e)}>
        {errorMessage && (
          <div className="error">
            <Alert variant="danger" dismissible>
              <Alert.Heading>Error</Alert.Heading>
              <p>{errorMessage}</p>
            </Alert>
          </div>
        )}
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
            min="5"
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