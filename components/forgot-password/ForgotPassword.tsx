"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ForgotPassword: React.FC = () => {
  const [data, setData] = useState({
    username: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { push } = useRouter(); 

  async function SendCode() {
    try {
      const response = await fetch(
        "/api/email-verification/getUser",
        {
          method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
          body: JSON.stringify({ username: data.username }), 
        }
      );
      const responseData = await response.json();
        if(responseData.user){
          push('forgot-password/enter-code/');
          setData({username: ""})
        } else {
          setErrorMessage(responseData.error)
        }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    SendCode();
  };


  return (
          <div className="max-w-[30rem] mx-auto mt-[10rem] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                  Forgot Password
                </h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Enter your email-address to change your password
                </p>
              </div>
              {errorMessage && (
          <div className="text-red-500 text-sm mb-4 mt-2 text-center">{errorMessage}</div>
        )}   
        <div className="mt-5">             
            <hr />
            <br />
            
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
              </div>
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword