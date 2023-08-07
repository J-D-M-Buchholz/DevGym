"use client";
import React, { useEffect } from "react"
import { useAuth } from "@/components/AuthContext";

export default function page() {
  const { login } = useAuth();
  const storedData = localStorage.getItem("userData")

  useEffect(() => {
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      login(parsedData);
    }
  }, [])
  
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Thank you for verification your email, you are now logged in!</h2>
    </div>
  )
}
