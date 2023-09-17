import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Navbar as BootstrapNavbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Alert,
} from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../assets/icons/Logo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    switch (searchQuery.toLowerCase()) {
      case "inicio":
        navigate("/");
        break;
      case "biografía":
        navigate("/Biografia");
        break;
      case "logros":
        navigate("/Logros");
        break;
      case "premios":
        navigate("/Premios");
        break;
      case "empresas":
        navigate("/Empresas");
        break;
      case "estado actual":
        navigate("/EstadoActual");
        break;
      default:
        setShowAlert(true);
    }
  };

  return (
    <div className="navbar-container">
      {showAlert && (
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>¡Oh no! ¡Ha ocurrido un error!</Alert.Heading>
          <p>No se ha encontrado el resultado. Por favor, intenta de nuevo.</p>
        </Alert>
      )}
      <BootstrapNavbar
        bg="transparent"
        variant="dark"
        expand="lg"
        className="justify-content-center"
      >
        <BootstrapNavbar.Brand as={Link} to="/">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top rounded-logo logo-margin"
            alt="Logo"
          />
          Michael Stonebraker
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav>
            <Nav.Link as={Link} to="/">
              Inicio
            </Nav.Link>
            <NavDropdown title="Más información" id="basic-nav-dropdown">
              <CSSTransition
                in={true}
                timeout={300}
                classNames="my-node"
                unmountOnExit
              >
                <>
                  <NavDropdown.Item as={Link} to="/biografia">
                    Biografía
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/logros">
                    Logros
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/premios">
                    Premios
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/empresas">
                    Empresas
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/estado-actual">
                    Estado Actual
                  </NavDropdown.Item>
                </>
              </CSSTransition>
            </NavDropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
        <Form
          inline
          onSubmit={handleSearchSubmit}
          className="search-form justify-content-between"
        >
          <FormControl
            type="text"
            placeholder="Buscar"
            className="mr-sm-2"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        </Form>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
