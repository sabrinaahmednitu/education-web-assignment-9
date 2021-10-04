import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useCourses } from '../hooks/useCourses.js';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses] = useCourses();

    return (
        <Container>
            <div className="Home-style mb-5 ">
                <h1>Dunwoody Online University</h1>
               
                <p>We are committed to ensuring that Dunwoody is the right fit for you. To do that we spend time getting to know you – the whole you. During the admissions process we seek to understand how you learn and what you are looking for in a university. Dunwoody university is an investment in your future and we are dedicated to ensuring the enrollment process is not only clear and uncomplicated – but focused around you.</p>
                <h6>Come Determined. Graduate Destined.</h6>
        
                <img src="https://t3.ftcdn.net/jpg/03/44/99/56/240_F_344995612_HrY4YHtyLXOthx3CICA372QmcFlap6Jw.jpg" alt="" />

                <h2>Our Running Sevices</h2>
                <Row
                    xs={1} md={3} className="g-4 ">
                    {
                        courses.slice(0, 4).map(course => <Course
                          course={course}
                        ></Course>)
                       
                    }
                </Row>

            </div>

        </Container>
        
    );
};

export default Home;