import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Feedback = () => {

  const navigate = useNavigate();
  const [formData, setFromDate] = useState({
    email: "",
    password: "",
  });
  const { name, lastname, email, feedback } = formData;

  const onChange = (e) => {
    setFromDate({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    navigate("/thankyou");
  }
  return (
    <div className="d-flex justify-content-center">
      <h3>Feedback</h3>

      <form className="m-5 w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter your name"
            name="name"
            value={name}
            required
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
            required
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
            required
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
            required
            onChange={(e) => onChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block" >
          Submit
        </button>

      </form>
    </div>
  );
};

export default Feedback;
