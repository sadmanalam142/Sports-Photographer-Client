import React from 'react';
import { Carousel } from 'react-bootstrap';
import photographer1 from '../../../images/photographer1.jpg';
import photographer2 from '../../../images/photographer2.jpg';
import photographer3 from '../../../images/photographer3.jpg';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={photographer1}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'green' }}>
                        <h3>Welcome to the sports photoprapher</h3>
                        <p>Here you can book my services. To know about me you can go to about page.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={photographer2}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'green' }}>
                        <h3>Welcome to the sports photoprapher</h3>
                        <p>Here you can book my services. To know about me you can go to about page.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img height={500}
                        className="d-block w-100"
                        src={photographer3}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{ color: 'green' }}>
                        <h3>Welcome to the sports photoprapher</h3>
                        <p>Here you can book my services. To know about me you can go to about page.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;