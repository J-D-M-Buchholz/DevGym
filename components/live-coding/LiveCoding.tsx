"use client"

import React, { useState } from "react"

import { useAuth } from "@/components/AuthContext"

const LiveCoding = () => {
  const { isLoggedIn, responseData } = useAuth()
  const [data, setData] = useState({
    date: "",
    time: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const appointmentData = {
      ...data,
      username: responseData?.user.username,
    }

    try {
      const response = await fetch("/api/live-coding/liveCoding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(appointmentData),
      })
      const responseData = await response.json()
      console.log(responseData)
    } catch (error) {
      console.log(error)
    }
  }

  if (!isLoggedIn) {
    return (
      <p style={{ textAlign: "center", margin: "5%" }}>
        Please log in to book an appointment.
      </p>
    )
  }

  return (
    <div className="max-w-[30rem] mx-auto mt-[10rem] mb-[10rem] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Live coding
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Book an appointment and improve your skills with our profesional
            team
          </p>
        </div>
        <div className="mt-5">
          <hr />
          <br />
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <label
                htmlFor="date"
                className="block text-sm mb-2 dark:text-white"
              >
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  name="date"
                  onChange={handleChange}
                  className="py-3 px-4 block w-full rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                  required
                />
              </div>
            </div>
            <br />
            <div>
              <label
                htmlFor="time"
                className="block text-sm mb-2 dark:text-white"
              >
                Time
              </label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  name="time"
                  onChange={handleChange}
                  className="py-3 px-4 block w-full rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                  required
                />
              </div>
              <br />
              <button
                type="submit"
                className="w-full px-3 py-2 text-white bg-blue-500 rounded-md focus:bg-blue-600 focus:outline-none"
              >
                Book Now!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LiveCoding
