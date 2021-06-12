import React from "react";
import "./navBar.css";
import logo from "../../images/logo.png";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function NavBar() {
  return (
    <div className="navbar">
      <Navbar collapseOnSelect="false" expand="lg" className="nav_bar">
        <Navbar.Brand href="/home">
          <img className="logo" alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="hamburguer"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav_bar_items">
            <Nav.Item>
              <Nav.Link href="/categories">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/categories/veggie">Veggie</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/categories/vegan">Vegan</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/categories/gluten_free">Gluten Free</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/categories/traditional">Traditional</Nav.Link>
            </Nav.Item>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/how">How we work</NavDropdown.Item>
              <NavDropdown.Item href="/about">About us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
