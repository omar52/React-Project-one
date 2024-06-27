import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <NavLink
            style={{ textDecoration: "none" }}
            className={({ isActive, isPending }) =>
              isPending ? "" : isActive ? "text-success" : "text-black"
            }
            to="/"
          >
            React-Bootstrap
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/register">
              <NavLink
                to="/register"
                style={{ textDecoration: "none" }}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-success" : "text-black"
                }
              >
                Register
              </NavLink>
            </Link>

            <Link className="nav-link" to="/login">
              <NavLink
              to="/login"
                style={{ textDecoration: "none" }}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-success" : "text-black"
                }
              >
                login
              </NavLink>
            </Link>

            <Link className="nav-link" to="/chart">
              <NavLink
              to="/chart"
                style={{ textDecoration: "none" }}
                className={({ isActive, isPending }) =>
                  isPending ? "" : isActive ? "text-success" : "text-black"
                }
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </NavLink>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
