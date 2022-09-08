/*here we create a context object "AuthContext" and a component "AuthContextProvider" that uses this context and wraps the entire application.
AuthContextProvider contains all the state logic*/

import React from "react";
import { useState, useEffect } from "react";

/*AuthContext is an object that contains the component "Provider" */
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  /*initially the Login component is shown. 
  When the user enters a valid email and password (Login component) he logs in and the Home component is shown (also the MainHeader changes). 
  A key and value pair for the localStorage object are set when the user logs in. 
  Whenever the user refreshes the page, the code checks whether the localStorage value is "1" and, if that is the case, the user is still logged in.*/
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*use Effect runs only at the first render because the dependency array is empty. Without using the useEffect hook, we would create an infinite loop*/
  useEffect(() => {
    const userInfo = localStorage.getItem("isLoggedIn");
    if (userInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
