import React from "react";
import classnames from "classnames";
import star from "../assets/img/star.png"
import { Progress } from "reactstrap";
import {Button} from 'reactstrap';
import telephone from '../assets/img/telephone.png'
// reactstrap components
import {
  Card,
  CardImg, CardText,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vertical: 1
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        <Row>
          <Col md="4">
            <Nav className="nav-pills-primary flex-column" pills>

            <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.vertical === 1
                  })}
                  onClick={e => this.toggleTabs(e, "vertical", 1)}
                  href="#pablo"
                >
                  Course Fees
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.vertical === 2
                  })}
                  onClick={e => this.toggleTabs(e, "vertical", 2)}
                  href="#pablo"
                >
                  Syllabus
                </NavLink>
              </NavItem>
             
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.vertical === 3
                  })}
                  onClick={e => this.toggleTabs(e, "vertical", 3)}
                  href="#pablo"
                >
                  Take Demo Session
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="8">
            <TabContent activeTab={"vertical" + this.state.vertical}>
              <TabPane tabId="vertical2">
                <Row>
                  <Col xs="12" sm="6">
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> Introduction to Es6</h4>
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> Introduction to ReactJS</h4>
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> React Basics</h4>
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> Components in React</h4>
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> Props and state</h4>
                    

                  </Col>
                  <Col xs="12" sm="6">
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> React Router</h4>
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> React key features</h4>
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> React Hooks</h4>
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> Redux</h4>
                    <h4><span ><img style={{height:"15px" }} src={star} alt="star"/></span> Deployment</h4>
                    

                  </Col>
                </Row>
              </TabPane>
              <TabPane tabId="vertical1">
              <Card >
   
    <CardBody>
        <CardText>
          <span className="text-info">Course Fees</span><br/>
          <span style={{fontSize:"30px", fontWeight:800}}>₹7990.00 <br/></span><span><del className="text-warning">₹10000.00</del> Discount Offered</span><br/>
          <br /><h4>We have limited seats... HURRY UP </h4>
          <div className="progress-container progress-success">
          <span className="progress-badge">Available seats</span>
          <Progress max="100" value="75">
            <span className="progress-value">77%</span>
          </Progress>
        </div>
        </CardText>
    </CardBody>
</Card>
              </TabPane>
              <TabPane tabId="vertical3">
              <Card >
   
   <CardBody>
       <CardText>
        <Row>
          <Col xs="12" sm="6">
              <h3>Interested in this course?</h3>
              <h4 className="mb-10">Click here for free live demo class</h4>
              <Button href="https://drive.google.com/file/d/1q4Oi1Gc94ZFHAmmWQPM5TmxIzJyMPP8_/view?usp=sharing"  target="_blank" color="info" className="animation-on-hover">Start</Button>
          </Col>
          <Col xs="12" sm="6">
                  <h3>Not Sure?</h3>
                <h4 className="text-warning">Get in touch with our expert technical advisor</h4>
                <img style={{height:"4rem"}} src={telephone} alt="call icon" /><a href="tel:+917209236123"><span style={{color:"white", fontSize:"1.5rem"}}>+91 7209236123</span></a>
          </Col>
        </Row>
        
       </CardText>
   </CardBody>
</Card>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </>
    );
  }
}

export default Navs;