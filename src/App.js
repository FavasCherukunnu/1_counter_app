import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './styles/App.css';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="">
        <Routes>
          <Route path="*" element={<Dashboard />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
