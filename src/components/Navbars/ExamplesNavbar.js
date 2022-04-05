
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import telephone from '../../assets/img/telephone.png'

export default function ExamplesNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  },[]);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" id="navbar-brand" tag={Link}>
            <span>Reactjsofficial </span>
           
          </NavbarBrand>
          
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  Reactjsofficial
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://chat.whatsapp.com/EzzRApWW651JeO958qwb42"
                rel="noopener noreferrer"
                target="_blank"
                title="Join our WhatsApp group"
              >
                <i className="fab fa-whatsapp" />
                <p className="d-lg-none d-xl-none">WhatsApp</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://t.me/joinchat/RadJamoTjPJsI3k4"
                rel="noopener noreferrer"
                target="_blank"
                title="Find us on telegram"
              >
                <i className="fab fa-telegram" />
                <p className="d-lg-none d-xl-none">Telegram</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.instagram.com/reactjsofficial/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow us on Instagram"
              >
                <i className="fab fa-instagram" />
                <p className="d-lg-none d-xl-none">Instagram</p>
              </NavLink>
            </NavItem>
            <NavItem>
            
            </NavItem>
            <NavItem>
            <NavLink tag={Link} to="/react-training">
                React Training
              </NavLink>
              </NavItem><NavItem>
              <NavLink tag={Link} to="/job-page">
                Become Our Team
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/landing-page#contact">
                Contact us
              </NavLink>
            </NavItem>
            <NavItem>
            <img style={{height:"2.1rem"}} src={telephone} alt="call icon" /><a href="tel:+917209236123"><span style={{color:"white", fontSize:"1rem"}}>+91 7209236123</span></a>

            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
