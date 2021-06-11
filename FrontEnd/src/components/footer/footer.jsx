import React from "react";
import "./footer.css";
import { ImInstagram } from "react-icons/im";
import { ImFacebook2 } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { ImEnvelop } from "react-icons/im";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer_cont">
        <Row>
          <Col xs="6" sm="6" md="3" lg="3" xl="3">
            <a
              className="instagram-p"
              href="https://www.instagram.com/easyfood/"
            >
              <ImInstagram className="instagram" />
            </a>
          </Col>
          <Col xs="6" sm="6" md="3" lg="3" xl="3">
            <a className="facebook-p " href="https://www.facebook.com/easyfood">
              <ImFacebook2 className="facebook" />
            </a>
          </Col>
          <Col xs="6" sm="6" md="3" xl="3">
            <span className=" telefono-p ">
              <ImPhone className="telefono" />
            </span>
          </Col>
          <Col xs="6" sm="6" md="3" lg="3" xl="3">
            <a href="mailto:2106@holbertonschool@gmail.com" className="mail-p ">
              <ImEnvelop className="mail" />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
