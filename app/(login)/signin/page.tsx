"use client"

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/components/AuthContext";

const DashboardAuth: React.FC = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { login, isLoggedIn } = useAuth();
  const { push } = useRouter (); 

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
      console.log("Verified: ", responseData.user.verified);
      if(!responseData.user.verified){
        return setErrorMessage("Please verify your email before login")
      }
      if (responseData.user) {
        login(responseData);
      } else {
        console.log("Login fail!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      push("/");
    }
  }, [isLoggedIn, push]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    userLogin();
  };


  return (
          <div className="max-w-[30rem] mx-auto mt-[10rem] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Sign in
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Don't have an account yet?
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium"
                    href="/signup"
                  >
                    {" "}Sign up here
                  </Link>
                </p>
              </div>
              {errorMessage && (
          <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
        )}
        <div className="mt-5">
          <button
            type="button"
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
          >
            <FcGoogle className="w-4 h-auto" />
            Sign in with Google
          </button>

          <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
            Or
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm mb-2 dark:text-white"
                >
                  E-Mail Address
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
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default DashboardAuth
