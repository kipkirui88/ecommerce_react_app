import React from "react";
import './LoginPage.css'; // Import your CSS file for Login Page styling

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Login</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Login</button>
        </form>

        <p>Don't have an account? <a href="#">Create Account</a></p>
      </div>
    </div>
  );
};

export default LoginPage;
