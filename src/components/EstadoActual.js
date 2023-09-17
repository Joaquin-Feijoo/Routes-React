import React from "react";
import "../styles/Aurora.css";
import { Container, Row, Col } from "react-bootstrap";

const EstadoActual = () => {
  return (
    <div className="content">
      <h3 className="title">
        Estado Actual de Michael Stonebraker
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
            <p>
              Michael Stonebraker es un científico de la computación
              especializado en sistemas de bases de datos. Actualmente, es
              profesor emérito en la Universidad de California, Berkeley y
              profesor adjunto en el Laboratorio de Ciencias de la Computación e
              Inteligencia Artificial del MIT.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default EstadoActual;
