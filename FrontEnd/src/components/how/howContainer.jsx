import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import './how.css';

function howContainer() {
  return (
    <Container className="container" id="howDetailContainer">
      <Row className="Row">
        <Col className="mx-auto" xs="12" sm="12" md="3" lg="3" xl="3">
          <div className="howCard">
            <figure>
              <img
                className="img-how"
                src={`/assets/Circle_Number.png`}
                alt="first step"
              ></img>
            </figure>
            <div className="infoBox">
              <p className="title">You Choose</p>
              <p className="info">
                We design our food bags to delight pretty much everyone, from
                fussy pre-schoolers to finicky foodies. Choose to have your box
                delivered weekly or fortnightly.
              </p>
            </div>
          </div>
        </Col>
        <Col className="mx-auto" xs="12" sm="12" md="3" lg="3" xl="3">
          <div className="howCard">
            <figure>
              <img
                className="img-how"
                src={`/assets/NEW_Circle_Works3.png`}
                alt="first step"
              ></img>
            </figure>
            <div className="infoBox">
              <p className="title">We Create</p>
              <p className="info">
                Every week, we dream up wonderful new dinner recipes. Check out
                our mouth-watering line-ups below!
              </p>
            </div>
          </div>
        </Col>
        <Col className="mx-auto" xs="12" sm="12" md="3" lg="3" xl="3">
          <div className="howCard">
            <figure>
              <img
                className="img-how"
                src={`/assets/NEW_Circle_Works4.png`}
                alt="first step"
              ></img>
            </figure>
            <div className="infoBox">
              <p className="title">We Source & Deliver</p>
              <p className="info">
                We receive your order by Sunday midnight then source the
                freshest production, meat and fish – always free-range and
                sustainably sourced. Our deliciously easy recipes are delivered
                to your door on Saturday, Sunday or Monday depending on your
                area..
              </p>
            </div>
          </div>
        </Col>
        <Col className="mx-auto" xs="12" sm="12" md="3" lg="3" xl="3">
          <div className="howCard">
            <figure>
              <img
                className="img-how"
                src={`/assets/NEW_Circle_Works5.png`}
                alt="first step"
              ></img>
            </figure>
            <div className="infoBox">
              <p className="title">You Cook & Enjoy</p>
              <p className="info">
                The fun begins! Our recipes are ready in no time, with tips to
                unleash your inner chef. We make dinner something to look
                forward to, you'll wonder how you ever got by before!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default howContainer;
