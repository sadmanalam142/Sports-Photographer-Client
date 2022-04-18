import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({item}) => {
    const {name, price, description, img} = item;
    const navigate = useNavigate();
    const navigateCheckout = () => {
        navigate('/checkout');
    }
    return (
        <div className='col-sm-12 col-lg-4 d-flex justify-content-center text-center'>
            <Card style={{ width: '18rem' }}>
                <Card.Img width={90} height={200} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Card.Text>{description}</Card.Text>
                    <Button onClick={navigateCheckout} variant="success">Book Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;