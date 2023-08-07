"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [data, setData] = useState({
    newPassword: "",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("")
  const {push} = useRouter()

  async function fetchPassword() {
    try {
      const response = await fetch(
        `/api/email-verification/enterCode`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: data.newPassword,
          }),
        }
      );
        
      const responseData = await response.json();
      
      if (response.ok) {
        // console.log("responseData: ", responseData);
        setSuccessMessage(responseData.message);
        setData({ newPassword: "" });
        setConfirmPassword("");
        push("/signin");
      } else {
        setErrorMessage(responseData.message);
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
    if (data.newPassword === confirmPassword) {
      fetchPassword();
    } else {
      setErrorMessage("Error confirming password!");
    }
  };

  return (
    <div className="max-w-[30rem] mx-auto mt-[10rem] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Reset Password
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enter your new password and confirm it
          </p>
        </div>
        {successMessage && (
          <div className="text-green-500 text-sm mb-4 mt-2 text-center">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-500 text-sm mb-4 mt-2 text-center">
            {errorMessage}
          </div>
        )}
        <div className="mt-5">
          <hr />
          <br />
          <form onSubmit={handleSubmit}>
            <div className="grid gap-y-4">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  New Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="newPassword"
                    name="newPassword"
                    value={data.newPassword}
                    onChange={handleChange}
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm mb-2 dark:text-white"
                >
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
