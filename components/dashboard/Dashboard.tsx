"use client";
import React, { useState } from "react";
import "./Dashboard.css";
import DashboardHome from "./content/DashboardHome";
import DashboardProfile from "./content/DashboardProfile";
import DashboardAuth from "./content/DashboardAuth";
import { useAuth } from "../AuthContext";

const Dashboard: React.FC = () => {
  const [showDiv, setShowDiv] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <div className="dash_icon" onClick={() => setShowDiv(!showDiv)}>
        <img
          src="/benutzer.svg"
          alt="Person"
          className="dash_person-icon"
          width={50}
          height={50}
        />
      </div>
      {showDiv && (
        <div className="dash_rounded-div">
          {!isLoggedIn ? (
            <DashboardAuth />
          ) : showProfile ? (
            <DashboardProfile
              showProfile={showProfile}
              setShowProfile={setShowProfile}
            />
          ) : (
            <DashboardHome
              showProfile={showProfile}
              setShowProfile={setShowProfile}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;

