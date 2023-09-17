import React from "react";
import "../styles/Aurora.css";
import { Container, Row, Col } from "react-bootstrap";

const Premios = () => {
  return (
    <div className="content">
      <h3 className="title">
        Premios de Michael Stonebraker
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </h3>
      <br></br>
      <Container>
        <Row>
          <Col>
            <br></br>
            <p>Algunos de sus premios más destacados incluyen:</p>
            <br></br>
            <p>
              • Recibió el Premio Turing 2014, a menudo descrito como “el Premio
              Nobel para la informática”.
            </p>
            <p>
              • Sus premios incluyen la Medalla John von Neumann del IEEE y el
              primer Premio Edgar F. Codd Innovations del SIGMOD.
            </p>
            <p>
              • En 1994 fue nombrado Fellow de la Association for Computing
              Machinery.
            </p>
            <p>
              • En 1997 fue elegido miembro del National Academy of Engineering
              por el desarrollo y comercialización de sistemas relacionales y
              objeto-relacionales.
            </p>
            <p>
              • En marzo de 2015 se anunció que ganó el Premio Turing ACM 2014.
            </p>
            <p>
              • En septiembre de 2015 ganó el Commonwealth Award 2015, elegido
              por los miembros del consejo del MassTLC.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Premios;
