import React, { useRef } from "react";
import "./Login.css";

import Log from "../../assets/Login/log.png";
import Register from "../../assets/Login/register.svg";

const Login = () => {
  const containerRef = useRef(null);

  const SignIn = () => {
    containerRef.current.classList.remove("sign-up-mode");
  };

  const SignUp = () => {
    containerRef.current.classList.add("sign-up-mode");
  };

  return (
   
      <div ref={containerRef} className="container-login-page shadow-2xl mx-auto my-32 translate-y-12)">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h1 className=" text-4xl">Hello, Dear Customer</h1>
              <p>Fastest and Excellent Care for Your Computers</p>
              <div className=" pt-4">
                <button
                  onClick={SignUp}
                  className="btn transparent"
                >
                  Sign up
                </button>
              </div>
            </div>
            <img src={Log} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                We can change your problematic computer into smooth working.
              </p>
              <div className=" pt-4">
                <button
                  onClick={SignIn}
                  className="btn transparent"
                >
                  Sign in
                </button>
              </div>
            </div>
            <img src={Register} className="image" alt="" />
          </div>
        </div>
      </div>
  
  );
};

export default Login;
