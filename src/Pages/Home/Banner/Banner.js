import React from 'react';
import { Carousel } from 'react-bootstrap';
import photographer from '../../../images/photographer.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={photographer}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{color: 'green'}}>
                        <h3>I am Andrew Wise</h3>
                        <p>I am a proffesional sports photographer. It's been 5 years i am doing the job. In this short period i have gain a lot experience and got some award too</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;