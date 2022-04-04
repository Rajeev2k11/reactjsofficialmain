
import React from "react";
// react plugin used to create charts

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  UncontrolledTooltip,
  Form,
  UncontrolledAlert
} from "reactstrap";

import {  CardImg, CardText } from 'reactstrap';
// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import Footer from "components/Footer/Footer.js";

import emailjs from 'emailjs-com';
import { Link } from "react-router-dom";

import LOGO from '../../assets/img/REACTLOGO.png';
import BLOB from '../../assets/img/blob.png';
import PATH2 from '../../assets/img/path2.png'
import triunghiuri from '../../assets/img/triunghiuri.png'
import cercuri from '../../assets/img/cercuri.png'
import waves from '../../assets/img/waves.png'
import patrat from '../../assets/img/patrat.png'
import path4 from '../../assets/img/path4.png'
import path5 from '../../assets/img/path5.png'
import community from '../../assets/img/community.png'
import path3 from '../../assets/img/path3.png'
import videotut from '../../assets/img/videotut.png'
import certificate from '../../assets/img/certificate.png'
import doubt from '../../assets/img/doubt.png'
import chesterwade from '../../assets/img/chesterwade.png'


export default function LandingPage() {
  React.useEffect(() => {
    document.body.classList.toggle("landing-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("landing-page");
    };
  },[]);

  function sendEmail(e){
		e.preventDefault();

		emailjs.sendForm('service_gtymsrr', 'template_zahqf6i', e.target, 'user_bKOaYiZidOEf3bp6V7HBM')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset();
	}
  return (
    <>
      <ExamplesNavbar />
      
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="path"
            src={BLOB}
          />
          <img
            alt="..."
            className="path2"
            src={PATH2}
          />
          <img
            alt="..."
            className="shapes triangle"
            src={triunghiuri}
          />
          <img
            alt="..."
            className="shapes wave"
            src={waves}
          />
          <img
            alt="..."
            className="shapes squares"
            src={patrat}
          />
          <img
            alt="..."
            className="shapes circle"
            src={cercuri}
          />
        
          <div className="content-center">
          <UncontrolledAlert className="alert-with-icon" color="primary">
          <span data-notify="icon" className="tim-icons icon-coins" />
          <span>
            <b>20% OFF -</b>
            Use code "FIRST20" to get 20% for first 10 Enroll "
          </span>
        </UncontrolledAlert>
            <Row className="row-grid justify-content-between align-items-center text-left">
              <Col lg="6" md="6">
                <h1 className="text-white">
                <span className="text-primary">Chasing Jobs?</span> <br />
                  <span className="text-white h2">Let us help you!!!</span>
                </h1>
                <p className="text-white mb-3">
                Personalized Training - Guidance from top-notch faculties - Job Assistance - Internship Programs - Enhance skillsets <br />Land a job of 8+ LPA <br />Helped 500+ students and many more to go…

                </p>
                <div className="btn-wrapper mb-3">
                <Button color="success" className="animation-on-hover"
                    onClick={(e) => e.preventDefault()}><Link to="/react-training">Explore Now</Link></Button>
                  {/* <Button
                    className="btn-link"
                    color="success"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    size="sm"
                  >
                    <i className="tim-icons icon-minimal-right" />
                  </Button> */}
                </div>
                <div className="btn-wrapper">
                  <div className="button-container">
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://t.me/joinchat/RadJamoTjPJsI3k4"
                      target="blank"
                    >
                      <i className="fab fa-telegram" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://www.instagram.com/reactjsofficial/"
                      target="blank"
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                    <Button
                      className="btn-icon btn-simple btn-round btn-neutral"
                      color="default"
                      href="https://www.facebook.com/groups/363999681229835"
                      target="blank"
                    >
                      <i className="fab fa-facebook" />
                    </Button>
                  </div>
                </div>
              </Col>
              <Col lg="4" md="5">
                <img
                  alt="..."
                  className="img-fluid"
                  src={LOGO}
                />
              </Col>
            </Row>
          </div>
        </div>
        
        {/* <blockquote className="blockquote text-center">
    <p className="mb-0">If you have the courage and the commitment to learn coding, then Reactjsofficial will empower you.</p>
    <footer className="blockquote-footer">Acheive your <cite title="Source Title">Front-end Developer Dream</cite></footer>
    <br /><Container>

<Row>
  <Col sm >
    <span style={{fontFamily:"sans-serif" }} > <i className="tim-icons icon-single-copy-04 " style={{color: '#78F3C5'}}>Content designed by industry proffesionals</i>   </span>
  
  </Col>
  <Col sm>
  <i className="tim-icons icon-chat-33" style={{color: '#78F3C5'}}>Instant 1:1 doubt resolution</i>
  </Col>
  <Col sm>
  <i className="tim-icons icon-bulb-63" style={{color: '#78F3C5'}}>Practical learning with 100+ problems & 10+ projects in each course</i>
  </Col>
</Row>
</Container>


</blockquote> */}
         <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <h1 className="text-center">How does our mentorship help you to get 100% profit? </h1>
                <Row className="row-grid justify-content-center">
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-primary">
                        <i className="tim-icons icon-notes" />
                      </div>
                      <h4 className="info-title">PERSONALISED LECTURES & WEEKLY PLAN</h4>
                      <hr className="line-primary" />
                      <p>
                      Learn through practical implementation and get your own weekly hands-on and videos to practice.
 
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-warning">
                        <i className="tim-icons icon-laptop" />
                      </div>
                      <h4 className="info-title">Live coding sessions</h4>
                      <hr className="line-warning" />
                      <p>
                      Learn all concepts through live coding sessions by our top industry experts.
                      </p>
                    </div>
                  </Col>
                  <Col lg="3">
                    <div className="info">
                      <div className="icon icon-success">
                        <i className="tim-icons icon-single-02" />
                      </div>
                      <h4 className="info-title">ONE TO ONE CLASS</h4>
                      <hr className="line-success" />
                      <p>
                      Topic wise Live Practical sessions with our top faculties. One-to-one classes to build your thought process.

                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>

        <section className="section section-lg">
      
        </section>
        <section className="section section-lg">
          <img
            alt="..."
            className="path"
            src={path4}
          />
          <img
            alt="..."
            className="path2"
            src={path5}
          />
          <img
            alt="..."
            className="path3"
            src={PATH2}
          />
 
        </section>
        <section className="section section-lg section-safe">
          <img
            alt="..."
            className="path"
            src={path5}
          />
          <Container>
            <Row className="row-grid justify-content-between">
              <Col md="5">
                <img
                  alt="..."
                  className="img-fluid floating"
                  src={chesterwade}
                />
                <Card className="card-stats bg-danger">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">20+</CardTitle>
                        <p className="card-category text-white">Hours</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-info">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">500+</CardTitle>
                        <p className="card-category text-white">
                          Enrolled Students
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
                <Card className="card-stats bg-default">
                  <CardBody>
                    <div className="justify-content-center">
                      <div className="numbers">
                        <CardTitle tag="p">50+</CardTitle>
                        <p className="card-category text-white">Join FAANG</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <div className="px-md-5">
                  <hr className="line-success" />
                  <h3>Are you a working professional willing to switch?</h3>
                  <p>
                  We have invented and perfected the best system to learn React. A dedicated team to help you land the best opportunities
                  </p>
                  <ul className="list-unstyled mt-5">
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-vector" />
                        </div>
                        <div className="ml-3">
                          <h6>ON-DEMAND REAL-TIME PROJECTS</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-tap-02" />
                        </div>
                        <div className="ml-3">
                          <h6>EXCLUSIVE CONTENT AND SUPPORT TEAM</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>JOB ASSISTANCE AND RESUME BUILDING</h6>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="d-flex align-items-center">
                        <div className="icon icon-success mb-2">
                          <i className="tim-icons icon-single-02" />
                        </div>
                        <div className="ml-3">
                          <h6>INTERVIEW PREP MODULES</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        
        <section className="section section-lg section-coins">
          <img
            alt="..."
            className="path"
            src={path3}
          />
          <div className="mt-5">
<Container className="mb-5"><Row>

<Col xs="12" sm="3">
    <Card style={{width: '15rem'}}>
    
    <CardImg className="p-5" top src={community} alt="community img" />
    <CardBody>
      <CardTitle style={{fontSize:"20px", fontWeight:400, textAlign:"center"}}>50K+ COMMUNITY</CardTitle>
        <CardText style={{textAlign:"center"}}>Globally connect through people with the same goal </CardText>
    </CardBody>
</Card>
    </Col>

    <Col xs="12" sm="3">
    <Card style={{width: '15rem'}}>
    <CardImg className="p-5" top src={videotut} alt="..." />
    <CardBody>
    <CardTitle style={{fontSize:"20px", fontWeight:400, textAlign:"center"}}>50K+ COMMUNITY</CardTitle>
        <CardText style={{textAlign:"center"}}>Globally connect through people with the same goal </CardText>
    </CardBody>
</Card>
    </Col>


    <Col xs="12" sm="3">
    <Card style={{width: '15rem'}}>
    <CardImg className="p-5" top src={certificate} alt="..." />
    <CardBody>
    <CardTitle style={{fontSize:"20px", fontWeight:400, textAlign:"center"}}>CERTIFICATION</CardTitle>
        <CardText style={{textAlign:"center"}}>Get a Course Completion Certificate as a full-fledged React Developer
 </CardText>
    </CardBody>
</Card>
    </Col>


    <Col xs="12" sm="3">
    <Card style={{width: '15rem'}}>
    <CardImg className="p-5" top src={doubt} alt="..." />
    <CardBody>
        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
    </CardBody>
</Card>
    </Col>

</Row></Container>
</div>
          {/*  */}
        </section>

          {/* section 3 */}

  <section id="contact" className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">101</h5>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={sendEmail}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input placeholder="Mike" type="text" name="name"/>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="type your email" type="email" name="email"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input placeholder="91 8340288884" type="text" name="phone"/>
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input placeholder="your company name" type="text" name="company"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Hello there!" type="text" name="message"/>
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="submit"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Find us at the office</h4>
                    <p>
                      Bangalore, <br />
                      India <br />
                      Email: info@reactjsofficial.com
                  
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Give us a ring</h4>
                    <p>
                      Reactjsofficial <br />
                      +91 7209 236123, +91 9981 693834 <br />
                      Mon - Sat, 10:00am-10:00pm
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}
