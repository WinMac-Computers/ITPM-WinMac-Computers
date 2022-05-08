import React, { useState, useRef } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

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
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [available, setAvailable] = useState("");
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const type = "user";

  const antIcon = (
    <LoadingOutlined style={{ fontSize: 24, marginBottom: "2px" }} spin />
  );

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

      localStorage.setItem("authToken", data.token); //set the browser caching or local storage for globally accessed anywhere in the application
      localStorage.setItem("username", data.username);
      localStorage.setItem("email", data.email);
      localStorage.setItem("type", data?.type);
      localStorage.setItem("dept", data?.dept);
      localStorage.setItem("id", data?.id);

      console.log(data.type);
      console.log(data.dept);

      setTimeout(() => {
        //set a 5seconds timeout for authentication

        if (data.type === "Admin" && data.dept === "CM") {
          navigate(`/admin-dashboard/${data.username}?_optCustomer=customer`);
        } else if (data.type === "Admin" && data.dept === "PM") {
          navigate(`/admin-dashboard/${data.username}?_optProduct=product`);
        } else if (data.type === "Admin" && data.dept === "PRM") {
          navigate(`/admin-dashboard/${data.username}?_optPromotion=promotion`);
        } else if (data.type === "Admin" && data.dept === "PAM") {
          navigate(`/admin-dashboard/${data.username}?_optPayment=payment`);
        } else if (data.type === "Admin" && data.dept === "OM") {
          navigate(`/admin-dashboard/${data.username}?_optOrder=order`);
        } else if (data.type === "Admin" && data.dept === "DM") {
          navigate(`/admin-dashboard/${data.username}?_optDelivery=delivery`);
        } else {
          navigate(`/user-dashboard/${data.username}`);
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

  const showPassword = (method) => {
    console.log(method);
    //show password method when checkbox is enabled
    var x = document.getElementById("password");
    var y = document.getElementById("password1");
    if (method === "X") {
      if (x.type === "password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
    } else {
      if (y.type === "password") {
        y.type = "text";
      } else {
        y.type = "password";
      }
    }
  };

  let refemail = null;
  let refpassword = null;
  let refusername = null;

  const onKeyUp = (e, target) => {
    //references for the input fields
    if (e.keyCode === 13) {
      //check the key code, ENTER button is 13
      switch (target) {
        case "email":
          refpassword.focus();
          break;
        case "password":
          refemail.focus();
          break;
        default:
          refusername.focus();
      }
    }
  };

  const registerHandler = async (e) => {
    //handler method for login
    e.preventDefault();

    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const type = "User";
      const { data } = await axios.post(
        "/api/auth/register",
        { username, email, password, type },
        config
      );

      setTimeout(() => {
        setLoading(true);
        window.location.reload();
      }, 5000);
    } catch (error) {
      setError(error.response.data.error);
      setAvailable(error.response.data.available);
      setLoading(false);
      setIsError(true);
      alert(error);
      setTimeout(() => {
        setError("");
        setAvailable("");
      }, 5000); //5s
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
              <div className="text-white">
                <input type="checkbox" onClick={() => showPassword("X")} /> Show
                Password <i class="fa fa-rss" aria-hidden="true"></i>
              </div>
            </label>
            <br />
            {isError && (
              <small className="mt-3 d-inline-block text-red-600 text-xl">
                Something went wrong. Please try again later.
              </small>
            )}
            <input
              type="submit"
              value={loading ? "Authenticating" : "SignIN"}
              className="btn solid"
            />
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
          <form onSubmit={registerHandler} className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input
                type="text"
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                placeholder="Username"
                autoFocus
                ref={(input) => {
                  refusername = input;
                }}
                onKeyUp={(e) => onKeyUp(e, "username")}
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                label="Email"
                autoComplete="email"
                id="email"
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
                name="password1"
                label="Password"
                autoComplete="password1"
                placeholder="Password"
                id="password1"
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
              <div className="text-white">
                <input type="checkbox" onClick={() => showPassword("Y")} /> Show
                Password <i class="fa fa-rss" aria-hidden="true"></i>
              </div>
            </label>
            {isError && (
              <small className="mt-3 d-inline-block text-red-600 text-xl">
                Something went wrong. Please try again later.
              </small>
            )}
            <br />
            <input
              type="submit"
              value={loading ? "Registration in Progress..." : "SignUP"}
              className="btn solid"
            />
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
                onClick={() => {
                  SignUp();
                  setEmail("");
                  setPassword("");
                }}
                className="btn transparent"
              >
                SignUp
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
              <button
                onClick={() => {
                  SignIn();
                  setUsername("");
                  setEmail("");
                  setPassword("");
                }}
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
