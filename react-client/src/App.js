import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQS";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoMatch from "./pages/NoMatch";
import Events from "./pages/Events";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import Footer from "./components/Footer";
import Thankyou from "./pages/Thankyou";
import ProductList from "./pages/ProductList";
import EditProfile from "./pages/EditProfile";
import "./App.css";
import AuthContext from "./context/AuthContext";
import { HowDoesitWork } from "./pages/HowDoesitWork";



const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState("false");

  const login = () => {
    console.log("login");
    setIsLoggedIn(true);
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  let appRoutes;
  if (isLoggedIn) {
    appRoutes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/product" element={<ProductList />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/thankyou" element={<Thankyou />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/edit-profile" element={<EditProfile />} />
        <Route exact path="HowDoesitWork" element={<HowDoesitWork />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    );
  } else {
    appRoutes = (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<Product />} />
        <Route exact path="/product" element={<ProductList />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/faq" element={<FAQ />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/event" element={<Events />} />
        <Route exact path="/thankyou" element={<Thankyou />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="HowDoesitWork" element={<HowDoesitWork />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    );
  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >

      <BrowserRouter>
        <NavigationBar />
        <Layout>{appRoutes}</Layout>
        <Footer />
      </BrowserRouter>

    </AuthContext.Provider>
  );
};

export default App;
