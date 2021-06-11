import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <article className="container-info">
      <p className="principal">Your everyday</p>
      <p className="principal2">solution</p>
      <p className="subtitle">Delicious food for every mood</p>
      <button className="button">
        <Link className="buttonLink" to="/categories/">
          ORDER NOW
        </Link>
      </button>
    </article>
  );
}

export default Home;
