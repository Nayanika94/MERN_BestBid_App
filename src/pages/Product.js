import React from "react";
import product from "../assets/starryNight.jpg";
import { Breadcrumb } from "react-bootstrap";

const Product = () => {
  return (
<<<<<<< HEAD
    <div class="container">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>
      <div class="container m-auto">
        <div class="m-4 mainWindow shadow bg-white-rounded p-1">
          <div class="d-flex flex-row flex-no-wrap bg-1">
            <div class="flex-grow-1 m-2">
              <img class="product-img p-2" src={product} alt="" />
            </div>

            <div class="flex-grow-1 m-2 p-1">
              <div class="d-flex flex-column">
                <div class="desc p-1 d-flex justify-content-between">
                  <h4> Starry Night painting </h4>
                  <h4>C$30000.00</h4>
                </div>
                <div class="seller-name p-1">
                  <small>ABC ltd.</small>
                </div>
                <div class="item-desc">
=======
    <div className="container">
      <Breadcrumb>
        <Breadcrumb.item href="#">Home</Breadcrumb.item>
        <Breadcrumb.item href="#">Library</Breadcrumb.item>
        <Breadcrumb.item active>Data</Breadcrumb.item>
      </Breadcrumb>
      <div className="container m-auto">
        <div className="m-4 mainWindow shadow bg-white-rounded p-1">
          <div className="d-flex flex-row flex-no-wrap bg-1">
            <div className="flex-grow-1 m-2">
              <img className="product-img p-2" src={product} />
            </div>
            <div className="flex-grow-1 m-2 p-1">
              <div className="d-flex flex-column">
                <div className="desc p-1 d-flex justify-content-between">
                  <h4> Starry Night painting </h4>
                  <h4>C$30000.00</h4>
                </div>
                <div className="seller-name p-1">
                  <small>ABC ltd.</small>
                </div>
                <div className="item-desc">
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
                  Starry Night is one of the most recognized pieces of art in
                  the world. It is absolutely everywhere, too. It can be seen on
                  coffee, mugs, t-shirts, towels, magnets, etc. Honestly, it
                  sometimes feels as if the painting’s fame has exceeded that of
                  its creator. It is a magnificent piece of art. That Starry
                  Night resonates with so many people is a testament to how its
                  beauty is timeless and universal.'
                </div>
<<<<<<< HEAD
                <div class="sizes mt-1 pr-1">
                  <button type="button" class="btn btn-xs mb-1 btn-warning">
                    Buy Now
                  </button>
                  <br />
                  <button type="button" class="btn btn-xs mb-1 btn-primary">
                    Place Bid
                  </button>{" "}
                  &nbsp; &nbsp;
                  <input type="number" placeholder="Min C$30000.00"></input>
=======
                <div className="sizes mt-1 pr-1">
                  <button type="button" className="btn btn-xs mb-1 btn-warning">
                    Buy Now
                  </button>
                  <br />
                  <button type="button" className="btn btn-xs mb-1 btn-primary">
                    Place Bid
                  </button>{'{'}" "{'}'}
                  &nbsp; &nbsp;
                  <input type="number" placeholder="Min C$30000.00" />
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
                </div>
              </div>
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

export default Product;
