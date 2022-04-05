import React, {useState, useRef } from "react";
import "./Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [available, setAvailable] = useState("");
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const loginHandler = async (e) => {
    //handler method for login
    e.preventDefault();

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.Token); //set the browser caching or local storage for globally accessed anywhere in the application
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);
      localStorage.setItem("type", data?.type);
      localStorage.setItem("dept", data?.dept);

      console.log(data.type);
      console.log(data.dept);

      setTimeout(() => {
        //set a 5seconds timeout for authentication

        if (data.type === "Admin" && data.dept === "CM") {
          navigate(`/admin-dashboard/null?_optCustomer=customer${data.username}`);
        } else if (data.type === "Admin" && data.dept === "PM") {
          navigate(`/admin-dashboard/${data.username}`);
        } else if (data.type === "Admin" && data.dept === "PRM") {
          navigate(`/admin-dashboard/${data.username}`);
        } else if (data.type === "Admin" && data.dept === "PAM") {
          navigate(`/admin-dashboard/${data.username}`);
        } else if (data.type === "Admin" && data.dept === "OM") {
          navigate(`/admin-dashboard/${data.username}`);
        } else if (data.type === "Admin" && data.dept === "DM") {
          navigate(`/admin-dashboard/${data.username}`);
        } else {
          navigate(`/${data.username}`);
        }

        setLoading(false);
        window.location.reload();
      }, 5000);
    } catch (error) {
      setError(error.response.data.error);
      setAvailable(error.response.data.available);
      setLoading(false);
      setIsError(true);
      setTimeout(() => {
        setError("");
        setAvailable("");
      }, 5000); //5s
    }
  };

  const showPassword = () => {
    //show password method when checkbox is enabled
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  let refemail = null;
  let refpassword = null;

  const onKeyUp = (e, target) => {
    //references for the input fields
    if (e.keyCode === 13) {
      //check the key code, ENTER button is 13
      switch (target) {
        case "email":
          refpassword.focus();
          break;
        default:
          refemail.focus();
          break;
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className="container-login-page shadow-2xl mx-auto my-32 translate-y-12)"
    >
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={loginHandler} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                label="Email Address"
                placeholder="Email"
                autoFocus
                ref={(input) => {
                  refemail = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input
                type="password"
                name="password"
                id="password"
                autoComplete="password"
                label="Password"
                placeholder="Password"
                autoFocus
                ref={(input) => {
                  refpassword = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "password")}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label className="float-left form-check-label">
                <input type="checkbox" onClick={showPassword} /> Show Password{" "}
                <i class="fa fa-rss" aria-hidden="true"></i>
              </label>
              <br />
              {isError && (
                <small className="mt-3 d-inline-block text-danger">
                  Something went wrong. Please try again later.
                </small>
              )}
            <input type="submit" value="Login" className="btn solid" disabled={loading} />
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
              <button onClick={SignUp} className="btn transparent">
                Sign up
              </button>
            </div>
          </div>
          <img src={Log} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>We can change your problematic computer into smooth working.</p>
            <div className=" pt-4">
              <button onClick={SignIn} className="btn transparent">
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
