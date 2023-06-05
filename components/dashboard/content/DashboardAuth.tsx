import React from "react";
import "./DashboardAuth.css";
import { useAuth } from "@/components/AuthContext";


const DashboardAuth: React.FC = () => {
  return (
    <div className="Auth">
      <div className="top">
        <img src="/muskeln.png" alt="" height={100} width={100} />
        <div className="Webname">
          <h1>DevGym</h1>
          <h2>Train your skills...</h2>
        </div>
      </div>
      <LogIn />
    </div>
  );
};

const LogIn: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="buttom">
      <form className="infoForm authForm">
        <h3>Log In</h3>
        <div>
          <input
            type="text"
            placeholder="Username"
            className="infoInput"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            {" "}
            Don't have an account Sign up{" "}
          </span>
          <button className="button infoButton" onClick={() => login()}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

const SignUp: React.FC = () => {
  return (
    <div className="buttom">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            placeholder="First Name"
            className="infoInput"
            name="firstname"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="infoInput"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />
          <input
            type="text"
            className="infoInput"
            name="confirmpass"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>{" "}
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
};

export default DashboardAuth;
