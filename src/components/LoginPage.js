import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file

function LoginPage({ setFirstName, firstName }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    setIsSignUp(true);
  };

  const handleLoginClick = () => {
    setIsSignUp(false);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Mock login validation
    if (role.toLowerCase() === 'admin') {
      navigate('/AdminDashboard');
    } else {
      navigate('/EmployeeDashboard');
    }
  };

  return (
    <div className={`container ${isSignUp ? 'active' : ''}`}>
      <div className="form-container sign-up">
        <form>
          <h1>Create Account</h1>
          <span>Please fill-in the spaces to create an active account</span>
          <input type="text" placeholder="First Name" name="First Name" onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" placeholder="Last Name" name="Last Name" />
          <input type="text" placeholder="Role" onChange={(e) => setRole(e.target.value)} />
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <button>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in">
        <form onSubmit={handleLoginSubmit}>
          <h1>Log In</h1>
          <span>or use your email and password</span>
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            type="text" 
            placeholder="Role" 
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
          <a href="#">Forgot Your Password?</a>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your details to log in if you already have an account. Thank you!</p>
            <button className={`hidden ${isSignUp ? '' : 'active'}`} onClick={handleLoginClick}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello! To our esteemed workers</h1>
            <p>Register with your personal details to use all of the site's features</p>
            <button className={`hidden ${isSignUp ? 'active' : ''}`} onClick={handleSignUpClick}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
