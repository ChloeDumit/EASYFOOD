import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import styled, { keyframes } from "styled-components";
import { bounceIn, slideInLeft } from "react-animations";
import Aos from "aos";
import "aos/dist/aos.css";

const FadeIn = styled.div`
  animation: 2s ${keyframes`${bounceIn}`};
`;
const SlideInLeft = styled.div`
  animation: 2s ${keyframes`${slideInLeft}`};
`;

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <article className="container-info">
      <SlideInLeft>
        <p className="principal">Your everyday</p>

        <p className="principal2">solution</p>

        <p className="subtitle">Delicious food for every mood</p>
      </SlideInLeft>
      <FadeIn>
        <button className="button">
          <Link className="buttonLink" to="/categories/">
            ORDER NOW
          </Link>
        </button>
      </FadeIn>
      <SlideInLeft>
        <img className="rectangle" src="/assets/rectangle.png" alt="rect" />
        <img className="food1" src="/assets/food.png" alt="rect" />
      </SlideInLeft>
      <div className="delivery">
        <img
          data-aos="fade-up"
          className="delivery-img"
          src="/assets/delivery.png"
          alt="delivery"
        ></img>
      </div>
      <h1 data-aos="fade-up" className="How-work">How we work</h1>
      <p data-aos="fade-up" className="info-how">
        We provide a wide variety of recipes to choose from, with vegan
        and gluten-free options, you just choose which recipes
        you´d like delivered, what size of the recipe, we process your information, we get together
        the necessary ingredients and delivered the grocery to your doorstep
        with an easy to follow guide on how to put everything together.
      </p>
      <img data-aos="fade-up" className="box" src="/assets/box.png" alt="box"></img>
    </article>
  );
}

export default Home;
