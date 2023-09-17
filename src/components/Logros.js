import React from "react";
import "../styles/Aurora.css";
import { Container, Row, Col } from "react-bootstrap";

const Logros = () => {
  return (
    <div className="content">
      <h3 className="title">
        Logros de Michael Stonebraker
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
              A lo largo de su carrera, ha recibido numerosos premios y
              reconocimientos por sus contribuciones a la investigación de bases
              de datos. Algunos de sus logros más destacados incluyen:
            </p>
            <br></br>
            <p>
              • En 1994 fue nombrado Fellow de la Association for Computing
              Machinery.
            </p>
            <p>
              • En 1997 fue elegido miembro del National Academy of Engineering
              por el desarrollo y comercialización de sistemas relacionales y
              objeto-relacionales.
            </p>
            <br></br>
            <p>
              Además, Stonebraker ha desarrollado numerosas tecnologías
              innovadoras en el campo de las bases de datos. Durante su tiempo
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

export default Logros;
