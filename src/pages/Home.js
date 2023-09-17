import React from "react";
import "../styles/Aurora.css";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="content">
      <h1 className="title">
        Bienvenido a la página web de Michael Stonebraker
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </h1>
      <br></br>
      <Container>
        <Row>
          <Col>
            <h3 className="subtitle">
              En esta página, encontrarás información sobre la vida, logros,
              premios y actualidad de Michael Stonebraker, un destacado
              profesional en el campo de bases de datos.
            </h3>
            <br></br>
            <h5>
              Michael Ralph Stonebraker es un informático especializado en
              sistemas de bases de datos. Su investigación y productos son
              fundamentales para muchas bases de datos relacionales y ha fundado
              muchas empresas de bases de datos. Por sus contribuciones a la
              investigación de bases de datos, recibió el Premio Turing 2014. Su
              carrera se puede dividir en dos fases: su tiempo en la Universidad
              de California, Berkeley, y en el Instituto Tecnológico de
              Massachusetts (MIT). Actualmente es profesor emérito en UC
              Berkeley y profesor adjunto en el MIT. También es conocido como
              editor del libro Lecturas en Sistemas de Base de Datos.
            </h5>
            <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
