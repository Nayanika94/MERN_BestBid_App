import React, { useState } from "react";
import { Widget } from "react-chat-widget";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const { name, email, message } = e.target.elements;

    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),

    });
    setStatus("Submit");
    navigate("/thankyou");
    let result = await response.json();
    alert(result.status);
    console.log(status);

  };


  return (
    <div className="container m-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <i className="fa fa-envelope" /> Contact us.
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows={6}
                    required
                    defaultValue={""}
                  />
                </div>
                <div className="mx-auto">
                  <button type="submit" className="btn btn-primary text-right">
                    {status}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <div className="card bg-light mb-3">
            <div className="card-header bg-success text-white text-uppercase">
              <i className="fa fa-home" /> Address
            </div>
            <div className="card-body">
              <p>ABC street</p>
              <p>75008 Ontario</p>
              <p>Canada</p>
              <p>Email : email@example.com</p>
              <p>Tel. +13 12 56 11 51 84</p>
            </div>
          </div>
        </div>
      </div>
      <Widget />
    </div>
  );
};

export default Contact;
