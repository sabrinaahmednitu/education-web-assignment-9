import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
const About = () => {
  return (
    <div style={{ background: "rgb(245, 245, 245)" }} className="py-5">
      <Container>
        <h2 className="text-center mb-4">WELCOME TO OUR INSTITUTE</h2>

        <Container className="mb-5" >
          <Row>
            <Col>
            <h1>Our new Graduate</h1>
            <img src="https://t3.ftcdn.net/jpg/04/24/61/26/240_F_424612633_zxNE8Wpx7MWaeviTuN2Jj71tNgVk6EPv.jpg" alt="" />
            <img src="https://t4.ftcdn.net/jpg/02/07/79/17/240_F_207791780_FEdPfDqxU2ApLRPaHGrQov6WdGGZg9jm.jpg" alt="" />
            <img src="https://t3.ftcdn.net/jpg/02/56/97/58/240_F_256975816_FnkvF4oQJF9Xo3qswkjfVDYelj2HleSr.jpg" alt="" />
              </Col> 
              </Row>
            </Container>


        <Row>
          <Col className="pe-3">
            <h5>About Us</h5>
            <p>
              There are countless online education marketplaces on the internet.
              And there’s us. We are not the biggest. We are not the cheapest.
              But we are the fastest growing. We have the highest course
              completion rate in the industry.course, we commit to the student. We are not going to sugar coat
              it - we will make you complete, come what may. You may not have
            </p>
              <h5>our reason</h5>        
            <p>
              And the reason is, we don’t give up. When a student commits to a
              course, we commit to the student. We are not going to sugar coat
              it - we will make you complete, come what may. You may not 
              are ridiculously committed to our students. Be it constant
              reminders, relentless masters or 24 x 7 online support - we will
              absolutely make sure that you run out of excuses to not complete
              the course.
            </p>
          </Col>
          <Col>
          <img src="https://as2.ftcdn.net/v2/jpg/02/52/15/49/1000_F_252154999_pjw3Vrql17RjJBLbzDPJMppAXgvei4AN.jpg" alt="" />
          </Col>
          <Col className="pe-3">
            <h5>Our Vision</h5>
            <p>
              To become the largest online learning ecosystem for continuing
              education, in partnership with corporates and academia.reminders, 
              absolutely make sure that you run out of excuses to not complete
              the course.professional life to the next level.complete, come what may. You may not have
            </p>
            <h5>Our Mission</h5>
            <p>
              To create an alternate platform for students who wish to continue
              and complete courses by attending live online courses, using a
              team of ridiculously committed educators who will stop at nothing
              deploying our world class team of industry experts, we aim to
              educate our learners with the skills they need to advance their
              professional life to the next level.
            </p>
          </Col>
          <Col>
          <img className="mt-5" src="https://t4.ftcdn.net/jpg/03/45/98/51/240_F_345985104_olwtOd33GGXiHJQSUwBcj9aOJ095YT5D.jpg" alt="" />
          <p>Our Classroom</p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h5>Sign up for our monthly newsletter</h5>
            <p>Be the first to know about news and updates</p>
          </Col>
         

          <Col className="d-flex align-items-center">
            <Form className="w-100">
              <Form.Group className="d-flex" controlId="formBasicEmail">
                <Form.Control
                  className="py-2 rounded-0"
                  type="email"
                  placeholder="Enter email"
                />
                <button
                  style={{ width: "120px" }}
                  className="btn rounded-0 btn-primary"
                >
                  SIGN UP
                </button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;