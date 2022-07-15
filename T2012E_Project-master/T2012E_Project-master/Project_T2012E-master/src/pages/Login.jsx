import axios from "axios";
import { Link, useLocation, NavLink } from "react-router-dom";
import "./css/Login.css";
import { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confimPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [errorPasword, setErrorPassword] = useState(null);
  let history = useHistory();

  const [isSignUp, setSignUp] = useState(false);
  const signUpButton = () => {
    setSignUp(false);
    setErrorName(null);
    setErrorPassword(null);
    setErrorEmail(null);
  };
  const signInButton = () => {
    setSignUp(true);
    setErrorName(null);
    setErrorPassword(null);
  };


  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const apiUrl = "https://elevatorsystemdashboard.azurewebsites.net/api";
  const onSubmit = async (e) => {
    e.preventDefault();
    if (name.length < 3) {
      // setErrorName("Invalid Name");
      toast.error("Name length must be at least 3 characters", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    if (password.length < 7) {
      // setErrorPassword("Invalid Password");
      toast.error("Password must be at least 8 characters", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    if (name.length > 3 && password.length > 7) {
      setErrorName(null);
      setErrorPassword(null);
      const data = { Username: name, Password: password };
      axios
        .post(`${apiUrl}/Login`, data)
        .then((result) => {
          const serializedState = JSON.stringify(result.data);
          var dataUser = localStorage.setItem("dataUser", serializedState);
          if (result.status === 200)  {
            history.push("/") 
            window.location.reload()
          }
          // if( result.)
          else alert("Invalid User");
        })
        .catch((err) => {
          if (err.response.status === 500)
          toast.warning("Account password is incorrect", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    }
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      // setErrorEmail("Invalid Email");
      toast.error("Email is not valid", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      setErrorEmail(null);
    }
    if (name.length < 3) {
      // setErrorName("Invalid Name");
      toast.error("Name length must be at least 3 characters", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      setErrorName(null);
    }
    
    if (password.length < 8) {
      // setErrorPassword("Invalid Password");
      toast.error("Password must be at least 8 characters", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }else{
      setErrorPassword(null);
      if(password === confimPassword){
        setErrorPassword(null);
      }else{
        toast.error("Confirm password is not matched", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    if (name.length > 3 && password.length > 7 && confimPassword.length >7 && confimPassword === password) {
      setErrorEmail(null);
      setErrorName(null);
      setErrorPassword(null);
      const data1 = { Email: email, Password: password, Username: name };
      axios.post(`${apiUrl}/Register`, data1).then((result) => {
        // console.log('result', result)
        if (result.status == 200) {
          history.push("/login");
          toast.success("Create Account Success", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          window.location.reload();
        } else {
          toast.error("Error, create an account again", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
    }
  };

  return (
    <>
      <div className="body-container">
      <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <ToastContainer />
        <div
          className={`container12 ${isSignUp ? " right-panel-active" : ""}`}
          id="container"
        >
          <div className="form-container sign-up-container">
            <form>
              <h1>Create Account</h1>
              
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <p style={{ color: "red" }}>{errorName}</p>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <p style={{ color: "red" }}>{errorEmail}</p>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: "red" }}>{errorPasword}</p>
              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <p style={{ color: "red" }}>{errorPasword}</p>
              <button onClick={handleSubmitRegister}>Sign Up</button>
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form>
              <h1>Sign in</h1>
              
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
              />
              <p style={{ color: "red" }}>{errorName}</p>

              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p style={{ color: "red" }}>{errorPasword}</p>
              {/* <a href="#">Forgot your password?</a> */}
              <button onClick={onSubmit}>Sign In</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button className="ghost" id="signIn" onClick={signUpButton}>
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={signInButton}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
