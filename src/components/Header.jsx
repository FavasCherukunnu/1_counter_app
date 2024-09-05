import React from 'react';
// import './Header.css'; // Optional: if you want to use external CSS

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>My Simple React App</h1>
        </header>
    );
};

const headerStyle = {
    backgroundColor: '#282c34',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    width: '100%'
};

export default Header;
