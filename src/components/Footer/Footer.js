
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h2 className="title">REACTJSOFFICIAL•</h2>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  Home
                </NavLink>
              </NavItem>
              
              <NavItem>
                <NavLink to="/refund-page" tag={Link}>
                  Refund Policy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/privacy-page" tag={Link}>
                  Privacy Policy
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Terms-page" tag={Link}>
                  Terms of use
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="/landing-page#contact">
                  Contact Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about-page">
                  About Us
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink target="blank" href="https://www.instagram.com/reactjsofficial/">
                  Blog
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/job-page">
                  Work for us
                </NavLink>
              </NavItem>
              
            </Nav>
          </Col>
          <Col md="3">
            <h3 className="title">Follow us:</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://chat.whatsapp.com/EzzRApWW651JeO958qwb42"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-whatsapp" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Joinchat
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://t.me/joinchat/RadJamoTjPJsI3k4"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-telegram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Join
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.instagram.com/reactjsofficial/"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Follow us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
