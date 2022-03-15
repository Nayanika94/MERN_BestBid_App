import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import {FAQ} from "./pages/FAQ"
import { Contact } from "./pages/Contact";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { NoMatch } from "./pages/NoMatch";
import { Layout } from "./components/Layout";
import { NavigationBar } from "./components/NavigationBar";
import { Product } from "./pages/Product";
import { Profile } from "./pages/Profile";
import { Payment } from "./pages/Payment";

import Footer from "./components/Footer";
import "./App.css";
import { Product_List } from "./pages/Product_List";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />

          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/product-list" component={Product_List} />
              <Route exact path="/about" component={About} />
              <Route exact path="/faq" component={FAQ} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/payment" component={Payment} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
