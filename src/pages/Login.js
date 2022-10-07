import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { Alert } from "react-bootstrap";

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFromDate] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const [errorMessage, setErrorMessage] = useState();

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
        process.env.REACT_APP_API_URL + "/api/auth",
        data,
        config
      );

      localStorage.setItem("token", response.data.token);
      auth.login();
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response.data) {
        setErrorMessage(err.response.data.errors);
      }
    }
  };
  return (
    <div className="d-flex justify-content-center">
      <h3>Log in</h3>

      <form className="m-5 w-50" onSubmit={(e) => onSubmit(e)}>
        {errorMessage && (
          <div className="error">
            <Alert variant="danger" dismissible>
              <Alert.Heading>Error</Alert.Heading>
              <p>{errorMessage}</p>
            </Alert>
          </div>
        )}
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