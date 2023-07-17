"use client";
import React, { useEffect, useState } from 'react'

interface UserData {
  user: any;
  token: string;
}

const LocalStorage = () => {
  const [authData, setAuthData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("authData");
    if (storedData) {
      setAuthData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div>
      <h1>LocalStorage</h1>
      {authData && (
        <div>
          <p>Token: {authData.token}</p>
          <p>User: {JSON.stringify(authData.user)}</p>
        </div>
      )}
    </div>
  )
}

export default LocalStorage
