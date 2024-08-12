import "./Footer.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Stack } from "react-bootstrap";
import logo from "../../assets/imgRazas/logo.jpg";

function Footer() {
  return (
    <div className="footer">
    <Container fluid className="bg-light text-danger p-4">
      <Row xs={1} md={3} lg={3} className="g-5">
        <Col md="auto" className="text-center mb-4 mb-md-0">
          <Stack className="align-items-center">
            <img
              alt=""
              src={logo}
              rounded
              width="150"
              height="150"
              className="d-inline-block align-top"
            />{" "}
            <h5>Tienda de Gatos</h5>
          </Stack>
        </Col>

        <Col md="auto" className="text-center mb-4 mb-md-0 fs-6 ">
          <h4>Contactanos!</h4>
          <p>Email: veronicamfalconi@gmail.com</p>
          <p>Cel. 1166668888</p>
          <p>742 Evergreen Terrace</p>
          <p className="text-black">© 2024 Página de Felinos. Todos los derechos reservados</p>
          <p className="text-black">Hecho por Alexia Corach y Veronica Falconi</p>
        </Col>

        <Col md="auto" className="text-center">
          <Nav className="flex-column fs-5">
            <Nav.Link href="/" className="text-danger p-1 fs-5">
              Inicio
            </Nav.Link>

            <Nav.Link href="/Razas" className="text-danger p-1 fs-5">
              Razas
            </Nav.Link>

            <Nav.Link href="/Veterinarios" className="text-danger p-1 fs-5">
              Nuestros Vets
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
    </div>
  );
}
export default Footer;