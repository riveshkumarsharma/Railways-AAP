// src/admin/login/AdminLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!credentials.username || !credentials.password) {
      setError('Please enter both username and password');
      return;
    }
    
    // In a real app, you would authenticate with a backend
    if (credentials.username === 'admin' && credentials.password === 'password') {
      // Store authentication token or user info in localStorage/sessionStorage
      localStorage.setItem('adminLoggedIn', 'true');
      
      // Redirect to admin dashboard
      navigate('/admin');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-card">
        <h1>Admin Login</h1>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <button type="submit" className="login-btn">Login</button>
        </form>
        
        <div className="login-footer">
          <a href="#" onClick={() => alert('Password reset functionality')}>Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
