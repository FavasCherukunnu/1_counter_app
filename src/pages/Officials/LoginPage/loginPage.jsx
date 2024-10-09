import React, { useState } from 'react';
import axios from 'axios';
import './loginPage.css';
import { login } from '../../../api/api';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await login(username, password );

      if (response.data.success) {
        navigate('/official/products/list');
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.message);
      } else {
        setError('An error occurred. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginPage">
      <form onSubmit={handleLogin} className="loginForm">
        <h2 className="loginTitle">Login</h2>
        {error && <p className="loginError">{error}</p>}
        <div className="loginInputContainer">
          <label className="loginLabel">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="loginInput"
          />
        </div>
        <div className="loginInputContainer">
          <label className="loginLabel">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="loginInput"
          />
        </div>
        <button type="submit" className="loginButton">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};
