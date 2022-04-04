<<<<<<< HEAD
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
=======
import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
<<<<<<< HEAD

=======
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
<<<<<<< HEAD

=======
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
    &:hover {
      color: white;
    }
  }
`;

<<<<<<< HEAD
const NavigationBar = () => {
  const auth = useContext(AuthContext);
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Best Bid</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/product-list">
                List Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/product">
                Products
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/faq">
                FAQ
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav.Item>
            {auth.isLoggedIn && (
              <Nav.Item>
                <Nav.Link as={Link} to="/profile">
                  Profile
                </Nav.Link>
              </Nav.Item>
            )}
            {auth.isLoggedIn ? (
              <Nav.Item>
                <Nav.Link onClick={auth.logout}>Logout</Nav.Link>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
=======
const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Best Bid</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="/">Action</NavDropdown.Item>
            <NavDropdown.Item href="/">Another action</NavDropdown.Item>
            <NavDropdown.Item href="/">Something</NavDropdown.Item>
            <NavDropdown.Item href="/">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Item>
            <Nav.Link as={Link} to="/product-list">
              List Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/product">
              Products
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/faq">
              FAQ
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/register">
              Register
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/profile">
              Profile
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/payment">
              Payment
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/event">
             Event
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={Link} to="/feedback">
             Feedback
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);

export default NavigationBar;
>>>>>>> c12a0504af953a52a47f8b8e4bca62f785781759
