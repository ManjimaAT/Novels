import React, { useState } from 'react';
import './login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleLogin = () => {
    if (!isValidUsername(username)) {
      setUsernameError('Username must be in the format of email');
      return;
    } else {
      setUsernameError('');
    }

    if (!isValidPassword(password)) {
      setPasswordError('Password must contain 8 characters with 1 capital letter, 1 special character, and 1 number');
      return;
    } else {
      setPasswordError('');
    }

    if (username === 'example@example.com' && password === 'Password1!') {
      console.log('Logged in successfully!');
    } else {
      setErrorMessage('Invalid username or password');
    }
  };

  const isValidUsername = (username) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(username);
  };

  const isValidPassword = (password) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsButtonDisabled(e.target.value === '' || password === '');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsButtonDisabled(e.target.value === '' || username === '');
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username (email):</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
         />
          {usernameError && <div className="error-message">{usernameError}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          {passwordError && <div className="error-message">{passwordError}</div>}
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button disabled={isButtonDisabled} onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
