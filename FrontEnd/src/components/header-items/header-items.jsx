import React from "react";
import NavBar from "../navBar/navBar";
// import { Link } from "react-router-dom";
import "./header-items.css";
// import { ImCart } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import { BsFillBagFill } from "react-icons/bs";


function Header() {
  return (

    <header className="header-style">
      <div className="NavBar0">
        <div className="NavBar">
        <NavBar className="nav_bar_header" />
      </div>

      <div className="buttonContainer">


        <button className="button_header_items snipcart-checkout ">
        <span class="snipcart-items-count"></span>
          <BsFillBagFill className="cart" />

        </button>
        <button className="button_header_profile snipcart-customer-signin">
          <CgProfile className="profile" />
        </button>

        </div>
      </div>
     
    </header>
  );
}

export default Header;
