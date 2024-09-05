import React from 'react';
// import './Body.css'; // Optional: if you want to use external CSS

const Body = () => {
    return (
        <main style={bodyStyle}>
            <h2>Welcome to My App</h2>
            <p>This is a simple layout example using React functional components.</p>
        </main>
    );
};

const bodyStyle = {
    padding: '20px',
    flexGrow:1
};

export default Body;
