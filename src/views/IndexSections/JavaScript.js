/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

// reactstrap components
import {
  Button,
  FormGroup,
  Container,
  Row,
  Col,
  
  UncontrolledCarousel,
} from "reactstrap";


const carouselItems = [
  {
    src: "",
    altText: "Slide 1",
    caption: "",
  },
  {
    src: "",
    altText: "Slide 2",
    caption: "",
  },
  {
    src: "",
    altText: "Slide 3",
    caption: "",
  },
];

export default function JavaScript() {
 
  return (
    <div className="section section-javascript" id="javascriptComponents">
      <img
        alt="..."
        className="path"
        src={require("assets/img/path5.png").default}
      />
      <img
        alt="..."
        className="path path1"
        src={require("assets/img/path5.png").default}
      />
      
      <div className="section">
        <Container>
          <div className="title">
            <h3>What our students say</h3>
          </div>
          <Row className="justify-content-between align-items-center">
            <Col className="mb-5 mb-lg-0" lg="5">
              <h1 className="text-white font-weight-light">
              500+ FRONTEND DEVELOPER TO INSPIRE YOU
              </h1>
              <p className="text-white mt-4">
                We beleive in to provide you the best value rather than only promising. You can connect with previous students from here.
              </p>
              <Button
                className="mt-4"
                color="warning"
                href="https://demos.creative-tim.com/blk-design-system-react/#/documentation/alert"
              >
                Connect
              </Button>
            </Col>
            <Col lg="6">
             
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
