import React from "react";

/*createContext returns an obect (AuthContext) that cointains a component (Provider)*/
/*A. context needs to be provided to the component that is going to "listen" to it (by wrapping it in jsx)
in this case we wrap the App component inside AuthContext.provider component. By doing so, all the descendant components
have access to the AuthContext
B. we pass to AuthContext.provider the value of the actual state isLoggedIn (inside App component) to make it dynamic
C. we import useContext hook inside the component where we are going to use AuthContext object (Navigation.js)
D. const ctx = useContext(AuthContext) we apply useContext method to AuthContext obect and that return the ctx object that contains the state value*/

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
