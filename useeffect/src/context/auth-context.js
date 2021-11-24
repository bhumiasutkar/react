import React, { useEffect, useState, createContext } from "react";
import { Navigate } from "react-router";

const defaultVal = {
  isLoggedIn: false,
  onLogout: () => { },
  onLogin: (email, password) => { },
};

const AuthContext = createContext(defaultVal);

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedInfo = localStorage.getItem("isLoggedIn");
    if (storedInfo === "1") {
      setIsLoggedIn(1);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", 1);
    setIsLoggedIn(true);
    //navigate("/");
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    <Navigate to="/login" />;
    console.log('logged in');
  };
  const values = {
    isLoggedIn: isLoggedIn,
    onLogin: loginHandler,
    onLogout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={values}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
