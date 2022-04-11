import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

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
                Product List
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
            {auth.isLoggedIn && (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/profile">
                    Profile
                  </Nav.Link>
                </Nav.Item>
              </>
            )}


            {auth.isLoggedIn && (
              <>
                <Nav.Item>
                  <Nav.Link as={Link} to="/HowDoesitWork">
                    How Auction Works
                  </Nav.Link>
                </Nav.Item>
              </>
            )}


            {auth.isLoggedIn ? (
              <Nav.Item>
                <Nav.Link onClick={auth.logout}>Logout</Nav.Link>
              </Nav.Item>
            ) : (
              <>
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
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavigationBar;
