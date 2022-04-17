import React, { useContext, useEffect } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import { io } from 'socket.io-client';
// import { Link } from 'react-router-dom';
import "../App";
// import axios from 'axios';
// import { ProductProvider } from "../context/ProductContext";
import logo from '../logo.svg';
// import CardGroup from "react-bootstrap/CardGroup";
// import Card from "react-bootstrap/Card";
// import { Button } from "react-bootstrap";
// import { ProductContext } from "../context/ProductContext";
// import image1 from "../assets/starryNight.jpg";
// import image3 from "../assets/starryNight.jpg";
// import starryNight from "../assets/starryNight.jpg";
import Product_List from "./Product_List";

const socket = io('http://localhost:5000');


const styles = {
  cardGroup: {
    margin: "1rem",
  },
  card: {
    borderRadius: 10,
    padding: "5px",
  },
  cardImage: {
    borderRadius: 0,
    height: "80%",
    width: "auto",
    padding: "5px",
  }
};



const Home = () => {

  // const { products, setProducts } = useContext(ProductContext);

  useEffect(() => {
    addResponseMessage("Welcome to our 24*7 support chat");
    socket.on('receive-message', (message) => {
      addResponseMessage(message);
    });
  }, []);

  // useEffect(() => {
  //   sendGetRequest();
  // }, []);

  // const sendGetRequest = async () => {
  //   try {
  //     let token = localStorage.getItem("token");

  //     let config = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         "x-auth-token": token,
  //       },
  //     };

  //     const response = await axios.get(
  //       "http://localhost:5000/api/product/",
  //       config
  //     );
  //     setProducts(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleNewUserMessage = (newMessage) => {
    // console.log(`new message incoming! ${newMessage}`);
    socket.emit('send-message', newMessage);
    //now send message to backend API
  };

  return (
    <>

      <div className="container">
        <div className="row">
          <div className="bg-image">
            <h1 className="bg-text">Find Your Next Deal</h1>
            <h6 className="bg-text">Online Auction is where everyone goes to shop, sell,and give, while discovering variety and affordability.</h6>
          </div>
        </div>
        <div>
          <h3 className="bg-text sub-topic" > Our Ongoing Deals</h3>
        </div>


        {/* <div className="grid"> {products.map(Product)}<Product prod={p} key={p._id} />))} </div> */}

        <Product_List />
        <div>
          <h3 className="bg-text sub-topic" > Our Team</h3>
        </div>
        <div>
          <div className="row">
            <div className="site-heading text-center w-100">
              <p>
                There are many components to becoming a top-performing team, but
                the key is working on highly cooperative relationship and thats
                what our team have done in this project.
              </p>
              <div className="border"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 team-box">
              <div className="team-img thumbnail">
                <img src="" alt="" />
                <div className="team-content">
                  <h3>Philip Freeman</h3>
                  <div className="border-team"></div>
                  <p>
                    I am from Philip ireland. And I have great experiance in IT
                    industry, But to introduce something new to world I have to
                    do something which is never imagined so I introduced idea of
                    bidding site so basically I am the co-founder of this site
                  </p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/">
                      <i
                        id="social-fb"
                        className="fa fa-facebook-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://twitter.com/">
                      <i
                        id="social-tw"
                        className="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://plus.google.com/">
                      <i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="mailto:bootsnipp@gmail.com">
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 team-box">
              <div className="team-img thumbnail">
                <img src="" alt="" />
                <div className="team-content">
                  <h3>David Smith</h3>
                  <div className="border-team"></div>
                  <p>
                    I am from america and I have good interest in business but
                    by hearing the idea of Philip I got introduce with something
                    new and I know this gonna be the new world so I supported
                    him as per his need so basically I am the financial manager
                    of this project.
                  </p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/">
                      <i
                        id="social-fb"
                        className="fa fa-facebook-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://twitter.com/">
                      <i
                        id="social-tw"
                        className="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://plus.google.com/">
                      <i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="mailto:bootsnipp@gmail.com">
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 team-box">
              <div className="team-img thumbnail">
                <img src="" alt="" />
                <div className="team-content">
                  <h3>Robert D'costa</h3>
                  <div className="border-team"></div>
                  <p>
                    I am Robert and I am from Canada. I have done many projects
                    in IT and it is great to work with philip I have worked on
                    this project as a team member. he Willing and able to adapt
                    to work under pressure and short time lines, as well as work
                    with and possibly manage others
                  </p>
                  <div className="social-icons">
                    <a href="https://www.facebook.com/">
                      <i
                        id="social-fb"
                        className="fa fa-facebook-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://twitter.com/">
                      <i
                        id="social-tw"
                        className="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="https://plus.google.com/">
                      <i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-3x social"
                      ></i>
                    </a>
                    &nbsp;
                    <a href="mailto:bootsnipp@gmail.com">
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Widget
        title="Welcome"
        subtitle="To our support chat"
        handleNewUserMessage={handleNewUserMessage}
        profileAvatar={logo}
        emojis="true"
      />

    </>
  )
}

// const Product = (prod) => {

//   return (
//     <>
//       <Card style={styles.card} key={prod._id} className="box">
//         <Card.Img variant="top" src={prod.photo} style={styles.cardImage} />
//         <Card.Body>
//           <Card.Text>{prod.title}</Card.Text>
//           <Card.Title>C${prod.price}</Card.Title>
//         </Card.Body>
//         <div className="mb-2">
//           <Button
//             variant="warning" size="sm" >
//             <Link to={`/product/${prod._id}`}>Buy Now</Link>
//           </Button>
//         </div>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//     </>
//   );
// };


export default Home;
