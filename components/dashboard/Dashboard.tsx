"use client"

import React, { useState } from "react"

import "./Dashboard.css"
import { useTheme } from "next-themes"

import { useAuth } from "../AuthContext"
import DashboardAuth from "./content/DashboardAuth"
import DashboardHome from "./content/DashboardHome"
import DashboardProfile from "./content/DashboardProfile"

const Dashboard: React.FC = () => {
  const [showDiv, setShowDiv] = useState(false)
  const [showProfile, setShowProfile] = useState(false)
  const { isLoggedIn } = useAuth()
  const { theme } = useTheme()
  return (
    <div>
      <div className="dash_icon" onClick={() => setShowDiv(!showDiv)}>
        {showDiv ? (
          <img
            src={!theme || theme === "light" ? "/kreuz(2).png" : "/kreuz(1).png"}
            alt="Kreuz"
            className="dash_person-icon"
            width={50}
            height={50}
          />
        ) : (
          <img
            src={!theme || theme === "light" ? "/benutzer(2).png" : "/benutzer(1).png"}
            alt="Person"
            className="dash_person-icon"
            width={50}
            height={50}
          />
        )}
      </div>

      {showDiv && (
        <div className="dash_rounded-div">
          {!isLoggedIn ? (
            <DashboardAuth 
            setShowDiv={setShowDiv}
            />
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
  )
}

export default Dashboard
