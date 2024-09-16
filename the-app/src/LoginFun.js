
import React, { createContext, useState, useContext } from 'react';

const LoginContext = createContext();


export default function LoginProvider({ childern }) {
  const [loggedIn, setLoggedIn] = useState(false);

  function trueLog() {
    setLoggedIn(true);
    console.log(loggedIn);
  }

  return (
    <LoginContext.Provider value={{ loggedIn, trueLog }}>
      {childern}
    </LoginContext.Provider>

  );
}


export function useLogin() {
  return useContext(LoginContext);
} 
