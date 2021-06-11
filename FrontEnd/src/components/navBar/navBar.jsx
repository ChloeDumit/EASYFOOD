import React from "react";
import "./navBar.css";
// import logo from "../../images/logo.png";
import { Navbar, Nav} from "react-bootstrap";
// import { BsFillBagFill } from "react-icons/bs";
// import { CgProfile } from "react-icons/cg";

function NavBar() {
  return (
    <div className='navbar'>
    <Navbar expand="lg" className="nav_bar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav  className="nav_bar_items">
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
          <Nav.Item>
            <Nav.Link href="/how">How we work</Nav.Link>
          </Nav.Item>

        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
  );
}

export default NavBar;
