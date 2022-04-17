import React from 'react';

const NotFound = () => {
    return (
        <div style={{height: '300px'}} className='d-flex align-items-center justify-content-center'>
            <div className='text-danger'>
                <h1>This Page Is Not Available</h1>
                <h6 className='text-center'>404 NOT FOUND</h6>
            </div>
        </div>
    );
};

export default NotFound;