import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col,} from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Course.css'
const Course = (props) => {
    const {courseName,professor,institute,rating,totalStudent,imgUrl,courseFee} = props.course;
    console.log(props)
    return (
       
            <Col>
            <Card className="h-100 bg-color">
                <Card.Img height="250px" variant="top" src={imgUrl} className="p-y"/>
                <Card.Body>
                <Card.Title>{courseName}</Card.Title>
                        <p>{institute}<small><br /> {professor}</small> <br />   {totalStudent} Students </p>
                        <p>Course-fee: {courseFee}</p> 
                        
                          
                       <p>  <p>Rating:</p> 
                       <Rating className="rating"
                        placeholderRating={rating}
                        emptySymbol={<i className="far fa-star" bg="warning" ></i>}
                        placeholderSymbol={<i className="fas fa-star" bg="warning" ></i>}
                        fullSymbol={<i className="fas fa-star" bg="warning" ></i>}
                    />
                    </p>
                    </Card.Body>
                     <Card.Footer>
                    <Link to="/"> 
                    <Button className="button-css" >Enroll Now</Button>
                    </Link>
                </Card.Footer>
                </Card>
               



          </Col>
        
      
    );
};

export default Course;