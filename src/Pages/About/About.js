import React from 'react';
import myself from '../../images/Andrew-Wise.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about-container'>
            <div>
                <h1>I am Andrew Wise</h1>
                <p></p>
            </div>
            <div>
                <img width={300} src={myself} alt="" />
            </div>
        </div>
    );
};

export default About;