import React from "react";
import NavBar from "../navBar/navBar";
import logo from "../../images/logo.png";
// import { Link } from "react-router-dom";
import "./header-items.css";
// import { ImCart } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { BsFillBagFill } from "react-icons/bs";


function Header() {
  return (

    <header className="header-style">
      <div className="NavBar0">
        <a class="navbar-brand" href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <button className="button_header_items snipcart-checkout">
          <BsFillBagFill className="cart" />

        </button>
        <button className="button_header_profile snipcart-customer-signin">
          <CgProfile className="profile" />
        </button>
      </div>
      <div className="NavBar">
        <NavBar className="nav_bar_header" />
      </div>
    </header>
  );
}

export default Header;
