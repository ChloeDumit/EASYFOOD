import React, {useEffect} from "react";
import { Row, Container, Col } from "react-bootstrap";
import "./about.css";
import Aos from "aos";
import "aos/dist/aos.css";


function AboutContainer() {


  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (

    <div>
      <h1 data-aos='slide-right' className='about'>About Us</h1>
      <div data-aos='fade-up' className="aboutContainer">
        <p className="p_cont">
          We are a young couple who always struggle with what were we going to
          eat, we dont like to go the supermarket, and we dont have a lot of
          time to make an elaborated meal.
        </p>
        <p className="p_cont">
          One night thinking about the ideal solution for that, something came
          across our minds, what if we didnt have to think about it anymore,
          what if someone brougth us all the things we needed and we just had to put it together.
        </p>

        <p className="p_cont">
          Thats how EasyFood was created, in fact, simplicity is our mantra.
          From online to doorstep...to your kitchen table, we make planning and
          preparing a home-cooked meal simple, intuitive and inspirational every
          step of the way. Providing everything you need, to bring more delicious
          meals and moments to the table, no matter how busy you are.
        </p>

        <p className='hbtn'>This is a Portfolio Project for Holberton School 
        <a className='link' href='https://github.com/ChloeDumit/EASYFOOD'>Project Repository</a></p>
        
      </div>
      <div data-aos='fade-up'>
        <h1 className='team'>Our Team</h1>
        <Container className="personcontainer" id="aboutPersonContainer">
        <Row className="Row">
        <Col className="mx-auto personCard" xs="12" sm="6" md="6" lg="6" xl="6">
          <div className="aboutCard">
            <figure>
              <img
                className="img-about"
                src={`/assets/chloe.png`}
                alt="first step"
              ></img>
            </figure>
            <p className='name'>Chloé Dumit</p>
            <a className='linkedin' href='https://www.linkedin.com/in/chlo%C3%A9-dumit-armand-ugon-85450415a'>Linkedin</a>
            <a className='github' href='https://github.com/ChloeDumit'>Github</a>
            </div>
            </Col>
            <Col className="mx-auto personCard" xs="12" sm="6" md="6" lg="6" xl="6">
          <div className="aboutCard">
            <figure>
              <img
                className="img-about"
                src={`/assets/matias.png`}
                alt="first step"
              ></img>
            </figure>
            <p className='name'>Matias Pirez</p>
            <a className='linkedin' href='https://www.linkedin.com/in/matpirez/'>Linkedin</a>
            <a className='github' href='https://github.com/Ripjawws'>Github</a>
            
            </div>
            </Col>
            </Row>
    </Container>
      </div>
    </div>
  );
}

export default AboutContainer;
