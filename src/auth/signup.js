import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import './signup.css';

function Signup({user}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  if(user) {
    return <Navigate to='/admin' />
  }
  const createUser = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user);

      //   localStorage.setItem('token', user.accessToken);
      //   localStorage.setItem('user', JSON.stringify(user));

      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const dataHandler = (e) => {};

  return (
    <div className="background">
      <div className="wrapper2">
        <form action="">
          <h1>Sign Up</h1>
          <div className="input-box">
            <input type="text" placeholder="First Name" required/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Last Name"  required onChange={dataHandler} />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Email"
              name="email"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="input-box">
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              required
              placeholder="Confirm Password"
            />
          </div>
          <button onClick={createUser}> Sign Up</button>
          <div className="register-link">
            <p>
              Already Registered ?
              <Link to="/login" className="ms-2">
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Signup;
