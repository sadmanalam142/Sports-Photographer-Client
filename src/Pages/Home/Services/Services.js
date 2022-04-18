import React from 'react';
import cricket from "../../../images/cricket-photography.jpg";
import football from "../../../images/football-photography.jpg";
import rugby from "../../../images/rugby-photography.jpg";
import Service from '../Service/Service';

const Services = () => {
    const sports = [
        {
            id: 1,
            name: 'Cricket Photography',
            price: '299',
            description: 'Any cricket event, i would love to work on there. I love to watch cricket game as well as photography',
            img: cricket
        },
        {
            id: 2,
            name: 'Football Photography',
            price: '399',
            description: 'Any football event, i would love to work on there. I love to watch football game as well as photography',
            img: football
        },
        {
            id: 3,
            name: 'Rugby Photography',
            price: '359',
            description: 'Any rugby event, i would love to work on there. I love to watch rugby game as well as photography',
            img: rugby
        }
    ]
    return (
        <div id='services'>
            <h2 className='text-center mt-5 mb-3 text-success'>My Services</h2>
            <div className='row'>
                {
                    sports.map(item => <Service
                        key={item.id}
                        item={item}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;