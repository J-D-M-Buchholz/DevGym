"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

import "./DashboardAuth.css"
import { useRouter } from "next/navigation"

import { useAuth } from "@/components/AuthContext"

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  confirmpass: "",
}

interface DashboardAuthProps {
  setShowDiv: Dispatch<SetStateAction<boolean>>
}

const DashboardAuth: React.FC<DashboardAuthProps> = ({ setShowDiv }) => {
  const [isSignUp, setIsSignUp] = useState(true)
  const [data, setData] = useState(initialState)
  const [confirmPassword, setConfirmPassword] = useState(true)
  const [responseMessage, setResponseMessage] = useState("")
  const { login, isLoggedIn } = useAuth()
  const { push } = useRouter()

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
      })
      const responseData = await response.json()
      console.log(responseData)
      if (responseData.user) {
        localStorage.setItem("userData", JSON.stringify(responseData))
        push("/conformation-request")
        setShowDiv(false)
      } else {
        setResponseMessage(responseData.message)
      }
    } catch (error) {
      console.log(error)
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
      )
      const responseData = await response.json()
      console.log(responseData)
      if (responseData.user) {
        login(responseData)
      } else {
        setResponseMessage(responseData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      push("/")
    }
  }, [isLoggedIn, push])

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    setConfirmPassword(true)
    e.preventDefault()
    if (isSignUp) {
      data.password === data.confirmpass ? signUp() : setConfirmPassword(false)
    } else {
      userLogin()
    }
  }

  const resetForm = () => {
    setConfirmPassword(true)
    setData(initialState)
  }

  return (
    <div className="dash_Auth">
      <div className="dash_top">
        <img src="/muskeln.png" alt="" height={100} width={100} />
        <div className="dash_Webname">
          <h1>DevGym</h1>
          <h2>Train your skills...</h2>
        </div>
      </div>
      <div className="dash_buttom">
        <form className="dash_infoForm dash_authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="dash_infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="dash_infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="email"
              className="dash_infoInput"
              name="username"
              placeholder="Username/Email"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          {data.username && !data.username.includes("@") && (
            <p className="dash_text-red-500 text-xs mt-1">
              Please enter a valid email address.
            </p>
          )}
          <div>
            <input
              type="password"
              className="dash_infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="dash_infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            className="dash_warningMessage"
            style={{
              display: responseMessage ? "block" : "none",
            }}
          >
            {responseMessage}
          </span>
          {isSignUp ? (
            <span
              className="dash_warningMessage"
              style={{
                display: confirmPassword ? "none" : "block",
              }}
            >
              Confirm password is not the same!!!
            </span>
          ) : (
            <span
              className="dash_warningMessage"
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
                setIsSignUp(!isSignUp)
                resetForm()
              }}
            >
              {isSignUp
                ? "Already have an account. Login!"
                : "Don't have an account? Sign Up now!"}
            </span>{" "}
          </div>
          <button className="dash_button dash_infoButton" type="submit">
            {isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default DashboardAuth
