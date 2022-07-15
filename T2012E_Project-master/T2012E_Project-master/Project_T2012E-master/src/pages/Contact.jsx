import React from "react";
import Map from "../components/Map";
import {
  Tab,
  Tabs,
  Container,
  Row,
  Col,
  Form,
  Group,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaRoute,FaPhoneAlt,FaEnvelope,FaGlobe } from 'react-icons/fa';


const Contact = () => {
  const key = "AIzaSyCrReRUR5r_GZEUuqFm2iSCgR0KaEk4FwI";
  return (
    <>
      <section className="ftco-section">
        <Container>
          <Row className="justify-content-center">
            <Col sm={6} className="text-center mb-5">
              <h2 className="heading-section">Contact Form</h2>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={12}>
              <div className="wrapper">
                <Row>
                  <Col sm={7}>
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Contact Us</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>

                      <Row>
                        <Col sm={6}>
                          <Form.Group
                            className="mb-3 mr-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                              type="email"
                              placeholder="Full Name"
                            />
                          </Form.Group>
                        </Col>

                        <Col sm={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                          </Form.Group>
                        </Col>
                       
                        <Col sm={12}>
                          <Form.Label>Contact</Form.Label>
                          <Form.Control as="textarea" rows={2} placeholder="Contact"/>
                        </Col>
                        <Col sm={12} className="mt-3">
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col sm={5} className="d-flex align-items-stretch">
                    <Map
                      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={
                        <div
                          style={{
                            height: `100%`,
                            width: `100%`,
                            margin: `auto`,
                            border: "2px solid black",
                          }}
                        />
                      }
                      mapElement={<div style={{ height: `100%` }} />}
                    />
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col sm={3}>
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center"></div>
                     
                      <div className="text">
                        <p>
                        <FaRoute style={{marginRight: '5px'}}/>
                          <span>Address:</span> 198 West 21th Street, Suite 721
                          New York NY 10016
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-phone"></span>
                      </div>
                      <div className="text">
                        <p>
                          <FaPhoneAlt style={{marginRight: '5px'}}/>
                          <span>Phone:</span>{" "}
                          <a href="tel://1234567920">+ 1235 2355 98</a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-paper-plane"></span>
                      </div>
                      <div className="text">
                        <p>
                          <FaEnvelope style={{marginRight: '5px'}}/>
                          <span>Email:</span>{" "}
                          <a href="mailto:info@yoursite.com">
                            info@yoursite.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col sm={3}>
                    <div className="dbox w-100 text-center">
                      <div className="icon d-flex align-items-center justify-content-center">
                        <span className="fa fa-globe"></span>
                      </div>
                      <div className="text">
                        <p>
                          <FaGlobe style={{marginRight: '5px'}}/>
                          <span>Website</span> <a href="#">yoursite.com</a>
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
