import React from "react";
import "../styles/Aurora.css";
import { Container, Row, Col } from "react-bootstrap";

const Empresas = () => {
  return (
    <div className="content">
      <h3 className="title">
        Empresas de Michael Stonebraker
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
              A lo largo de su carrera, ha fundado muchas empresas de bases de
              datos y ha desarrollado numerosas tecnologías innovadoras en el
              campo de las bases de datos. Algunas de las empresas que ha
              fundado incluyen:
            </p>
            <br></br>
            <p>• Ingres Corporation</p>
            <p>• Illustra</p>
            <p>• Paradigm4</p>
            <p>• StreamBase Systems</p>
            <p>• Tamr</p>
            <p>• Vertica</p>
            <p>• VoltDB</p>
            <br></br>
            <p>También se desempeñó como director técnico de Informix</p>
            <br></br>
            <p>
              En cuanto a las bases de datos que ha diseñado, durante su tiempo
              en la Universidad de California, Berkeley, se centró en los
              sistemas de gestión de bases de datos relacionales como Ingres y
              Postgres. Ingres fue uno de los primeros sistemas de bases de
              datos relacionales, en el que los datos se representan en forma
              tabular y los registros individuales se almacenan como una fila de
              la tabla. Postgres mejoró Ingres al agregar programación orientada
              a objetos, lo que permite una programación más rápida, versátil y
              fácil de mantener.
            </p>
            <br></br>
            <p>
              En el Instituto Tecnológico de Massachusetts (MIT), Stonebraker
              desarrolló técnicas más novedosas para la gestión de datos como
              C-Store, H-Store y SciDB. C-Store es una base que utiliza columnas
              en lugar de filas para mejorar el rendimiento. H-Store es una base
              que depende del acceso a la memoria del ordenador en lugar del
              almacenamiento en disco. SciDB es una base relacional basada en
              matrices utilizada para aprendizaje automático y procesamiento
              estadístico.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Empresas;
