import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
const Contact = () => {
  return (
    <div>
          <ContactForm/>
          
    </div>
  );
};
function ContactForm() {
  return (
    <div style={{ margin: "58px 0 40px" }}>
      <h2 className="text-center">Contact Us</h2>
      <p className="text-center">
        You can easily reach us through filling up the form
      </p>
      <h4 className="text-center" >Help-line: +99 5764 5466</h4>
      <div>
        <Container>
          <Row>
          <Col className="text-center mb-5" >
              <img src="https://t3.ftcdn.net/jpg/02/95/75/60/240_F_295756002_UP6dBCygQC1E7PyFKFFtowrCQ4WQMPBg.jpg" alt="" />
              <p>You can get any kind of information about your course and any kind of support you want.just do contract with us.
              </p>
              </Col>
          </Row>
        </Container>

        <Container>
          <Form>
            <Row>
              <Col sm>
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Label>Your Name: </Form.Label>
                  <Form.Control type="text" placeholder="Enter Your Name" />
                </Form.Group>
              </Col>
              <Col sm>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your Email: </Form.Label>
                  <Form.Control type="email" placeholder="Enter Your Email" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Control
              className="my-3"
              type="text"
              placeholder="Write Your Subject..."
            />
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Messages:</Form.Label>
              <Form.Control
                placeholder="Write you message..."
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Button className="mb-5" variant="secondary" type="submit">
              Submit
            </Button>
          </Form>

          <Col className="text-center" >
              <img src="https://t3.ftcdn.net/jpg/02/99/32/08/240_F_299320851_UUXSujdX4fElJF2IM6YbhdMSKIgvfZAz.jpg" alt="" />
              <p>Our team is always with you</p>
             
              </Col>
        </Container>

      </div>
    </div>
  );
}

export default Contact;
