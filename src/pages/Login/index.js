import { Link } from "react-router-dom";

// CSS
import "./index.css";

// Images
import Image from "../../assets/images/loginSide.png";

const Login = () => {
  return (
    <div className="login-container">
      <div className="left-section">
        <img src={Image} alt="Login" />
      </div>
      <div className="right-section">
        <div className="login-card">
          <div className="switch">
            <Link to="/login" className="switch-item">
              <h2>Log In</h2>
            </Link>
            <Link to="/signup" className="switch-item">
              <h2 id="signup">Sign Up</h2>
            </Link>
          </div>

          <hr />

          <div className="login-form">
            <h3>To Continue</h3>
            <p>We need your Name and Email</p>

            <input type="text" name="email" placeholder="Email" />
            <input type="text" name="password" placeholder="Password" />

            <button type="submit">Log In</button>

            <span className="remember-me">
              <input type="checkbox" name="remember-me" />
              <span>Remember Me</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
