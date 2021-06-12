import React from "react";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import "./header.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Header() {
  return (
    <header className="header_style">
      <Navbar collapseOnSelect expand="lg" className="nav_bar_color">
        <Navbar.Brand href="/home">
          <img className="logo" alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="hamburguer"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_bar_items">
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categories">All </NavDropdown.Item>
              <NavDropdown.Item href="/categories/veggie">
                Veggie
              </NavDropdown.Item>
              <NavDropdown.Item href="/categories/vegan">
                Vegan
              </NavDropdown.Item>
              <NavDropdown.Item href="/categories/gluten_free">
                Gluten Free
              </NavDropdown.Item>
              <NavDropdown.Item href="/categories/traditional">
                Traditional
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/how">How we work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/about">About Us</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <button className="button_header">
        <Link className="buttonLink" to="/categories/">
          ORDER NOW
        </Link>
      </button>
      <div className="NavBar"></div>
    </header>
  );
}

export default Header;
