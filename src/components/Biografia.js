import React from "react";
import "../styles/Aurora.css";
import { Container, Row, Col } from "react-bootstrap";

const Biografia = () => {
  return (
    <div className="content">
      <h3 className="title">
        Biografía de Michael Stonebraker
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
              Michael Ralph Stonebraker (nacido el 11 de octubre de 1943 en
              Newburyport, Massachusetts) es un ingeniero informático
              estadounidense conocido por su trabajo fundamental en la creación,
              desarrollo y perfeccionamiento de sistemas de gestión de bases de
              datos relacionales (RDBMS) y almacenes de datos. A través de una
              serie de prototipos académicos y nuevas empresas comerciales, la
              investigación y los productos de Stonebraker son fundamentales
              para muchas bases de datos relacionales. También es el fundador de
              muchas empresas de bases de datos, incluidas Ingres Corporation,
              Illustra, Paradigm4, StreamBase Systems, Tamr, Vertica y VoltDB, y
              se desempeñó como director técnico de Informix. Por sus
              contribuciones a la investigación de bases de datos, Stonebraker
              recibió el Premio Turing 2014, a menudo descrito como "el Premio
              Nobel para la informática".
            </p>
            <br></br>
            <p>
              Stonebraker creció en Milton, New Hampshire1. Obtuvo su B.S.E. en
              ingeniería eléctrica en la Universidad de Princeton en 1965 y su
              M.S. y Ph.D. en la Universidad de Michigan en 1967 y 1971
              respectivamente. Sus premios incluyen la Medalla John von Neumann
              del IEEE y el primer Premio Edgar F. Codd Innovations del SIGMOD.
              En 1994 fue nombrado Fellow de la Association for Computing
              Machinery. En 1997 fue elegido miembro del National Academy of
              Engineering por el desarrollo y comercialización de sistemas
              relacionales y objeto-relacionales. En marzo de 2015 se anunció
              que ganó el Premio Turing ACM 2014. En septiembre de 2015 ganó el
              Commonwealth Award 2015, elegido por los miembros del consejo del
              MassTLC.
            </p>
            <br></br>
            <p>
              La carrera de Stonebraker se puede dividir a grandes rasgos en dos
              fases: su tiempo en la Universidad de California, Berkeley cuando
              se centró en los sistemas de gestión de bases de datos
              relacionales como Ingres y Postgres, y en el Instituto Tecnológico
              de Massachusetts (MIT) donde desarrolló técnicas más novedosas
              para la gestión de datos como C-Store, H-Store y SciDB.
            </p>
            <br></br>
            <p>
              Stonebraker se unió a la Universidad de California, Berkeley como
              profesor asistente en 1971 y enseñó en el departamento de ciencias
              informáticas durante veintinueve años. Fue allí donde hizo su
              temprano trabajo pionero sobre bases de datos relacionales. En
              1973, Stonebraker y su colega Eugene Wong comenzaron a investigar
              sistemas relacionales después de leer una serie de artículos
              seminales publicados por Edgar F. Codd sobre el modelo relacional.
            </p>
            <br></br>
            <p>
              En 2001 Stonebraker se convirtió en profesor adjunto en el
              Instituto Tecnológico de Massachusetts (MIT) y más tarde se
              convirtió en codirector del Intel Science and Technology Center
              for Big Data en el Laboratorio de Ciencias Computacionales e
              Inteligencia Artificial del MIT. Creó varias bases de datos,
              incluyendo C-Store (una base que utilizaba columnas en lugar de
              filas para mejorar el rendimiento) en 2005, H-Store (una base que
              dependía del acceso a la memoria del ordenador en lugar del
              almacenamiento en disco) en 2007 y SciDB (una base relacional
              basada en matrices utilizada para aprendizaje automático y
              procesamiento estadístico) en 2011.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Biografia;
