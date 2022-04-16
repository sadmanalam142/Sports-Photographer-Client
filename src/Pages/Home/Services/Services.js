import React from 'react';
import { Button, Card } from 'react-bootstrap';
import cricket from "../../../images/cricket-photography.jpg";
import football from "../../../images/football-photography.jpg";
import rugby from "../../../images/rugby-photography.jpg";

const Services = () => {
    const sports = [
        {
            id: 1,
            
        }
    ]
    return (
        <div id='services'>
            <h2 className='text-center my-5 text-success'>My Services</h2>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Services;