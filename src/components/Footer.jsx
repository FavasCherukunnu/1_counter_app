import React from 'react';
// import './Footer.css'; // Optional: if you want to use external CSS

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>&copy; 2024 My Simple React App</p>
        </footer>
    );
};

const footerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%'
};

export default Footer;
