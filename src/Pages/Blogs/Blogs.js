import React from 'react';

const Blogs = () => {
    return (
        <div id='blogs' className='container'>
            <h3>Q1. What are the differences between Authorization and Authentication?</h3>
            <div className='row container'>
                <div className='col-lg-6'>
                    <h6 className='text-center'>Authentication</h6>
                    <li>Authentication verifies who is the user</li>
                    <li>Authenticaton is the first step to set identity</li>
                    <li>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</li>
                    <li>Authentication is visible to and partially changeable by the user.</li>
                </div>
                <div className='col-lg-6'>
                    <h6 className='text-center'>Authorization</h6>
                    <li>Authorization determines where the user can enter</li>
                    <li>Authorization works after Authentocation is done</li>
                    <li>Authorization works through settings that are implemented and maintained by the organization.</li>
                    <li>Authorization isn't visible to or changeable by the user.</li>
                </div>
            </div>
            <h3>Q2. Why are you using Firebase? What other options do you have to emplement Authentication?</h3>
            <p>A. The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code which organized by google. Firebase helps you build and run successful apps. Products and solutions you can rely on through your app's journey. Firebase Analytics gives you undeniable insight into user behavior. Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <h3>Q3. What other services does firebase provide other than authentication?</h3>
            <p>A. Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use of it. There are many services which Firebase provides, Most useful of them are:</p>
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Predictions</li>
            <li>Cloud Messaging</li>
            <li>Dynamic Links</li>
            <li>Remote Config</li>
        </div>
    );
};

export default Blogs;