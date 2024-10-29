import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.email === 'root' && credentials.password === '12345') {
      alert('Login Successful!');
      setCredentials({ email: '', password: '' });
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome Back!</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            placeholder="Enter your username"
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
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Login</button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
