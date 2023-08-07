"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface UserData {
  user: any;
  token: string;
}

interface AuthContextData {
  isLoggedIn: boolean;
  login: (data: UserData) => void;
  logout: () => void;
  responseData: UserData | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextData>({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  responseData: null,
  setIsLoggedIn: () => {},
});

export const useAuth = (): AuthContextData => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [responseData, setResponseData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("authData");
    if (storedData) {
      const parsedData: UserData = JSON.parse(storedData);
      login(parsedData);
    }
  }, []);

  const login = (data: UserData) => {
    setIsLoggedIn(true);
    setResponseData(data);
    localStorage.setItem("authData", JSON.stringify(data));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setResponseData(null);
    localStorage.removeItem("authData");
  };

  const authContextValue: AuthContextData = {
    isLoggedIn,
    login,
    logout,
    responseData,
    setIsLoggedIn
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};