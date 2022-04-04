import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
<<<<<<< HEAD
import FAQ from "./pages/FAQ";
=======
import FAQ from "./pages/FAQS";
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
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
import Product_List from "./pages/Product_List";
import Edit_Profile from "./pages/Edit_Profile";
<<<<<<< HEAD
import "./App.css";
import AuthContext from "./context/AuthContext";

=======
import io from 'socket.io-client';
import "./App.css";
import AuthContext from "./context/AuthContext";


const socket = io.connect("http://localhost:5000");

>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
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
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/edit-profile" element={<Edit_Profile />} />
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
        <Route exact path="/payment" element={<Payment />} />
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
<<<<<<< HEAD
=======


>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
