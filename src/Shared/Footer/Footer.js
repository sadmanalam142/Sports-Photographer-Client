import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p className='text-center mt-5'><small>Copyright @ {year}</small></p>
        </div>
    );
};

export default Footer;