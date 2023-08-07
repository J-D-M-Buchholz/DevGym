"use client";
import React, { useEffect } from "react"
import { useAuth } from "@/components/AuthContext";

export default function page() {
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    setIsLoggedIn(true);
  }, [])
  
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Thank you for verification your email, you are now logged in!</h2>
    </div>
  )
}
