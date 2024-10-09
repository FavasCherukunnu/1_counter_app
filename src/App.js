import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './pages/Officials/Dashboard/Dashboard';
import './styles/App.css';
import { LoginPage } from './pages/Officials/LoginPage/loginPage';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <div className="">
        <Routes>
          <Route path="/official/*" >
            <Route index element={<Navigate to="/official/login" />} />
            <Route path='login' element={<LoginPage/>} />
            <Route path="*" element={<Dashboard />} />
          </Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
