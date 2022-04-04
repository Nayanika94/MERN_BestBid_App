import React from "react";

const Contact = () => {
  return (
    <div className="container m-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <i className="fa fa-envelope" /> Contact us.
            </div>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea className="form-control" id="message" rows={6} required defaultValue={""} />
                </div>
                <div className="mx-auto">
                  <button type="submit" className="btn btn-primary text-right">
                    Submit
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
    </div>
  );
};

export default Contact;
