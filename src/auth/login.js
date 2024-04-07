import React, { useState } from "react";
import "./LoginForm.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import { Admin } from "../components/AdminPanel";

const Login = ({setUser, user}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  if(user) {
    return <Navigate to='/admin' />
  }
  
  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      setUser(user)
      navigate("/Admin");
    } catch (err) {
      console.log(err)
    }
  };

  return (
    <div className="background">
      <div className="wrapper">
        <form action="">
          <h1>Sign In</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              required
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <FaLock className="icon" />
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me{" "}
            </label>
            <a href="#">Forgot Password ?</a>
          </div>
          <button type="submit" onClick={loginUser }>
            {" "}
            Sign In{" "}
          </button>
          <div className="register-link">
            <p>
              Don't have an account? 
              <Link to="/signup" className="ms-2">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
