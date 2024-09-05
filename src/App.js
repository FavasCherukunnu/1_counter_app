import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import Sidenav from './components/SideNav';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <div style={{flexGrow:1,display:'flex',}}>
                <Sidenav />
                <Body />
            </div>
            <Footer />
        </div>
    );
}

export default App;
