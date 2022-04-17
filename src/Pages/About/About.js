import React from 'react';
import myself from '../../images/Andrew-Wise.jpg';
import './About.css';

const About = () => {
    return (
        <div className='about-container container'>
            <div>
                <h1>Hi!! I am <span className='text-container'>Andrew Wise</span> </h1>
                <h6 className='text-container'>My Profession</h6>
                <p>I am a proffesional sports photographer. It's been 5 years i am doing the job. In this short period i have gain a lot experience and got some award too. I enjoy my proffession while wathcing games.</p>
                <h6 className='text-container'>My Goal</h6>
                <p>My goal is to called for internatinal sports events like league games</p>
            </div>
            <div>
                <img className='rounded' width={350} src={myself} alt="" />
            </div>
        </div>
    );
};

export default About;