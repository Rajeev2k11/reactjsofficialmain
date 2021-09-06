import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Collapse,
  Row,
  Col
} from "reactstrap";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedCollapses: ["collapseOne"]
    };
  }
  // with this function we create an array with the opened collapses
  // it is like a toggle function for all collapses from this page
  collapsesToggle = collapse => {
    let openedCollapses = this.state.openedCollapses;
    if (openedCollapses.includes(collapse)) {
      this.setState({
        openedCollapses: []
      });
    } else {
      this.setState({
        openedCollapses: [collapse]
      });
    }
  };
  render() {
    return (
      <>
      <h3>Detailed curriculum</h3>
        <div
          aria-multiselectable={true}
          className="card-collapse"
          id="accordion"
          role="tablist"
        >
          <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={this.state.openedCollapses.includes(
                  "collapseOne"
                )}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {e.preventDefault();this.collapsesToggle("collapseOne")}}
              >
                <span className="text-primary h4">Introduction to ES6{" "}</span>

              </a>
            </CardHeader>
            <Collapse
              role="tabpanel"
              isOpen={this.state.openedCollapses.includes("collapseOne")}
            >
              <CardBody>
                  <Row>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Proxies</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Modules</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Iterators</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Rest and Spread Operators</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Template Strings</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Object Literals</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to webpack/ Babel/ npm</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Promises</h5>
                    </Col>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Map + Set + Weakmap + Weakset</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Generators</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Let and const</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> De-structuring</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Template Strings</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Classes</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Arrows</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to ES5 to ES6</h5>
                    </Col>
                  </Row>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={this.state.openedCollapses.includes(
                  "collapseTwo"
                )}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {e.preventDefault();this.collapsesToggle("collapseTwo")}}
              >
                <span className="text-primary h4">Introduction to ReactJS{" "}</span>

              </a>
            </CardHeader>
            <Collapse
              role="tabpanel"
              isOpen={this.state.openedCollapses.includes("collapseTwo")}
            >
              <CardBody>
              <Row>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Basic Setup</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand the View Technology</h5>
                    
                    </Col>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Single Page Application vs Multipage Application</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Overview of ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand JavaScript MVC Architecture</h5>
                    
                    </Col>
                  </Row>
              </CardBody>
            </Collapse>
          </Card>
          <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={this.state.openedCollapses.includes(
                  "collapseThree"
                )}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {e.preventDefault();this.collapsesToggle("collapseThree")}}
              >
               <span className="text-primary h4">React Basics{" "}</span>

              </a>
            </CardHeader>
            <Collapse
              role="tabpanel"
              isOpen={this.state.openedCollapses.includes("collapseThree")}
            >
              <CardBody>
                <Row>
                <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Basic Setup</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand the View Technology</h5>
                    
                    </Col>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Single Page Application vs Multipage Application</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Overview of ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand JavaScript MVC Architecture</h5>
                    
                    </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>

          <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={this.state.openedCollapses.includes(
                  "collapseFour"
                )}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {e.preventDefault();this.collapsesToggle("collapseFour")}}
              >
               <span className="text-primary h4">Components in React{" "}</span>

              </a>
            </CardHeader>
            <Collapse
              role="tabpanel"
              isOpen={this.state.openedCollapses.includes("collapseFour")}
            >
              <CardBody>
                <Row>
                <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Basic Setup</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand the View Technology</h5>
                    
                    </Col>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Single Page Application vs Multipage Application</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Overview of ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand JavaScript MVC Architecture</h5>
                    
                    </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>

          <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={this.state.openedCollapses.includes(
                  "collapseFive"
                )}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {e.preventDefault();this.collapsesToggle("collapseFive")}}
              >
               <span className="text-primary h4">Props and state{" "}</span>

              </a>
            </CardHeader>
            <Collapse
              role="tabpanel"
              isOpen={this.state.openedCollapses.includes("collapseFive")}
            >
              <CardBody>
                <Row>
                <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Basic Setup</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand the View Technology</h5>
                    
                    </Col>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Single Page Application vs Multipage Application</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Overview of ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand JavaScript MVC Architecture</h5>
                    
                    </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>

          <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={this.state.openedCollapses.includes(
                  "collapseSix"
                )}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {e.preventDefault();this.collapsesToggle("collapseSix")}}
              >
               <span className="text-primary h4">React Router{" "}</span>

              </a>
            </CardHeader>
            <Collapse
              role="tabpanel"
              isOpen={this.state.openedCollapses.includes("collapseSix")}
            >
              <CardBody>
                <Row>
                <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Basic Setup</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand the View Technology</h5>
                    
                    </Col>
                    <Col >
                    <h5><i className="tim-icons icon-double-right text-warning"/> Single Page Application vs Multipage Application</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Overview of ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand JavaScript MVC Architecture</h5>
                    
                    </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>

          <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={this.state.openedCollapses.includes(
                  "collapseSeven"
                )}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {e.preventDefault();this.collapsesToggle("collapseSeven")}}
              >
               <span className="text-primary h4">React key features{" "}</span>

              </a>
            </CardHeader>
            <Collapse
              role="tabpanel"
              isOpen={this.state.openedCollapses.includes("collapseSeven")}
            >
              <CardBody>
                <Row>
                <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Basic Setup</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand the View Technology</h5>
                    
                    </Col>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Single Page Application vs Multipage Application</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Overview of ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand JavaScript MVC Architecture</h5>
                    
                    </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>

          <Card className="card-plain">
            <CardHeader role="tab">
              <a
                aria-expanded={this.state.openedCollapses.includes(
                  "collapseEight"
                )}
                href="#pablo"
                data-parent="#accordion"
                data-toggle="collapse"
                onClick={(e) => {e.preventDefault();this.collapsesToggle("collapseEight")}}
              >
               <span className="text-primary h4">React Hooks{" "}</span>

              </a>
            </CardHeader>
            <Collapse
              role="tabpanel"
              isOpen={this.state.openedCollapses.includes("collapseEight")}
            >
              <CardBody>
                <Row>
                <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Basic Setup</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Introduction to ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand the View Technology</h5>
                    
                    </Col>
                    <Col>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Single Page Application vs Multipage Application</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Overview of ReactJS</h5>
                    <h5><i className="tim-icons icon-double-right text-warning"/> Understand JavaScript MVC Architecture</h5>
                    
                    </Col>
                </Row>
              </CardBody>
            </Collapse>
          </Card>

       

         

          
        </div>
      </>
    );
  }
}

export default Details;