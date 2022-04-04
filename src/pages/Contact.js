import React from "react";

const Contact = () => {
  return (
<<<<<<< HEAD
    <div class="container m-5">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-header bg-primary text-white">
              <i class="fa fa-envelope"></i> Contact us.
            </div>
            <div class="card-body">
              <form>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    aria-describedby="emailHelp"
                    placeholder="Enter name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    required
                  />
                  <small id="emailHelp" class="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="6"
                    required
                  ></textarea>
                </div>
                <div class="mx-auto">
                  <button type="submit" class="btn btn-primary text-right">
=======
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
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
<<<<<<< HEAD
        <div class="col-12 col-sm-4">
          <div class="card bg-light mb-3">
            <div class="card-header bg-success text-white text-uppercase">
              <i class="fa fa-home"></i> Address
            </div>
            <div class="card-body">
=======
        <div className="col-12 col-sm-4">
          <div className="card bg-light mb-3">
            <div className="card-header bg-success text-white text-uppercase">
              <i className="fa fa-home" /> Address
            </div>
            <div className="card-body">
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
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
<<<<<<< HEAD
=======

>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
  );
};

export default Contact;
