"use client"
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";


const EnterCode = () => {

  const [data, setData] = useState({
    code: ["", "", "", "", "", ""],
  });
  const [errorMessage, setErrorMessage] = useState("");
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [verificationCode, setVerificationCode] = useState("");
  const { push } = useRouter();

   useEffect(() => {
     async function fetchVerificationCode() {
       try {
         const response = await fetch("/api/email-verification/enterCode/", {
           method: "POST",
           headers: {
             "Content-Type": "application/json",
           },
           body: JSON.stringify({
             code: data.code.join(""),
           }),
         });
         const responseData = await response.json();
         if (response.ok) {
           if (responseData.message === "Code is valid!") {
             setVerificationCode(data.code.join(""));
             // console.log(responseData);
           }
         }
       } catch (error) {
         setErrorMessage("Error fetching verification code! Please try again.");
       }
     }

     fetchVerificationCode();
   }, [data.code]);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]*$/.test(value)) {
      setData((prevData) => {
        const newData = [...prevData.code];
        newData[index] = value;
        return { ...prevData, code: newData };
      });

      if (value.length === 1 && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = e.clipboardData.getData("text");
    const digits = pastedData.match(/\d/g) || [];
    digits.slice(0, 6).forEach((digit, index) => {
      handleChange(index, digit);
    });
    e.preventDefault();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "/api/email-verification/enterCode/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: data.code.join("")
          }),
        }
      );
      const responseData = await response.json();
      // console.log(responseData);
      
      if (response.ok) {
        if (responseData.message === "Code is valid!") {
          push(`/forgot-password/enter-code/reset-password`);
        } else {
          setErrorMessage(responseData.message);
        }
      } else {
        setErrorMessage(responseData.message);
      }

      setData({ code: ["", "", "", "", "", ""] });
    } catch (error) {
      setErrorMessage("Error checking code! Please try again.");
    }
  };

  return (
    <div className="max-w-[30rem] mx-auto mt-[10rem] bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-slate-900 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
            Enter Code
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Check your email-address and enter the code here
          </p>
          
        </div>
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
                <div
                  className="relative"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                  }}
                >
                  {data.code.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      name="code"
                      onChange={(e) => handleChange(index, e.target.value)}
                      onPaste={handlePaste}
                      value={digit}
                      ref={(el) => (inputRefs.current[index] = el)}
                      className="py-3 w-12 px-4 block text-center rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-800 bg-gray-100 dark:border-gray-700 dark:text-gray-400"
                      maxLength={1}
                      required
                    />
                  ))}
                </div>
              </div>
              <div></div>
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
  );
};

export default EnterCode;