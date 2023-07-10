"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { FcGoogle } from "react-icons/fc"
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthContext"

const initialState = {
  firstname: "",
  lastname: "",
  username: "",
  password: "",
  confirmPassword: "",
}

const Page = () => {
  const [data, setData] = useState(initialState)
  const [confirmPassword, setConfirmPassword] = useState(true)
  const { login, isLoggedIn } = useAuth()
  const { push } = useRouter (); 

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
        login(responseData)
      } else {
        console.log("Signup fail!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      push("/");
    }
  }, [isLoggedIn, push]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setConfirmPassword(true)

    if (data.password === data.confirmPassword) {
      signUp()
    } else {
      setConfirmPassword(false)
    }
  }

  return (
    <div className="max-w-[30rem] mx-auto mt-[5rem] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Sign up
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?
            <Link
              className="text-blue-600 decoration-2 hover:underline font-medium"
              href="/signin"
            >
              {" "}
              Sign in here
            </Link>
          </p>
        </div>

        <div className="mt-5">
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            <FcGoogle className="w-4 h-auto" />
            Sign up with Google
          </button>

          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
            Or
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label
                  htmlFor="firstname"
                  className="block text-sm mb-2 dark:text-white"
                >
                  First Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={data.firstname}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lastname"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Last Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={data.lastname}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="username"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Username/Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="username"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                  {data.username && !data.username.includes("@") && (
                    <p className="text-red-500 text-xs mt-1">
                      Please enter a valid email address.
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={data.confirmPassword}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
                {!confirmPassword && (
                  <p className="text-xs text-red-600 mt-2">
                    Password does not match the password
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
        <div className="flex items-center">
          <div className="flex">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="remember-me" className="text-sm dark:text-white">
              I accept the{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="#"
              >
                Terms and Conditions
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
