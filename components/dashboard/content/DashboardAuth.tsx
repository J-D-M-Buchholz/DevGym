"use client";
import React, { useState } from "react";
import "./DashboardAuth.css";
import { useAuth } from "@/components/AuthContext";

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  confirmpass: "",
};

const DashboardAuth: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [data, setData] = useState(initialState);
  const [confirmPassword, setConfirmPassword] = useState(true);
  const [responseMessage, setResponseMessage] = useState("");
  const { login } = useAuth();

  async function signUp() {
    try {
      const response = await fetch("/api/dashboard/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          firstname: data.firstname,
          lastname: data.lastname,
          password: data.password,
        }),
      });
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.user) {
        login(responseData);
      } else {
        setResponseMessage(responseData.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function userLogin() {
    try {
      const response = await fetch(
        "https://devgym-drab.vercel.app/api/dashboard/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: data.username,
            password: data.password,
          }),
        }
      );
      const responseData = await response.json();
      console.log(responseData);
      if (responseData.user) {
        login(responseData);
      } else {
        setResponseMessage(responseData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    setConfirmPassword(true);
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass ? signUp() : setConfirmPassword(false);
    } else {
      userLogin();
    }
  };

  const resetForm = () => {
    setConfirmPassword(true);
    setData(initialState);
  };

  return (
    <div className="Auth">
      <div className="top">
        <img src="/muskeln.png" alt="" height={100} width={100} />
        <div className="Webname">
          <h1>DevGym</h1>
          <h2>Train your skills...</h2>
        </div>
      </div>
      <div className="buttom">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Usernames"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span className="warningMessage"
            style={{
              display: responseMessage ? "block" : "none",
            }}
          >
            {responseMessage}
          </span>
          {isSignUp ? (
            <span className="warningMessage"
              style={{
                display: confirmPassword ? "none" : "block",
              }}
            >
              Confirm password is not the same!!!
            </span>
          ) : (
            <span className="warningMessage"
              style={{
                display: responseMessage ? "block" : "none",
              }}
            >
              {responseMessage}
            </span>
          )}
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setIsSignUp(!isSignUp);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account? Sign Up now!"}
            </span>{" "}
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default DashboardAuth;
