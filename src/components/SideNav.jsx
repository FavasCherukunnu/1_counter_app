import React from 'react';
// import './Sidenav.css'; // Optional: if you want to use external CSS

const Sidenav = () => {
    return (
        <nav style={sidenavStyle}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

const sidenavStyle = {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    height: '100%',
    width: '200px',
};

export default Sidenav;
