import React from 'react';

const Loading = () => {
    return (
        <div style={{height: '400px'}} className='w-100 d-flex justify-content-center align-items-center'>
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;