import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";
import Event  from "./pages/Event";
import Feedback  from "./pages/Feedback";
import Product_List from "./pages/Product_List";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  let appRoutes;
  if (isLoggedIn) {
    appRoutes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product-list" element={<Product_List />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/event" element={<Event />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    );
  } else {
    appRoutes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Product />} />
        <Route exact path="/product-list" element={<Product_List />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/event" component={<Event />} />
        <Route exact path="/feedback" component={<Feedback />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    );
  }
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        <Layout>{appRoutes}</Layout>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
