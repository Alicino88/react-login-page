import Login from "./Components/Login/Login.js";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home.js";
import MainHeader from "./Components/MainHeader/MainHeader.js";
import AuthContext from "./Context/auth-context.js";

function App() {
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
    console.log(localStorage);
    setIsLoggedIn(true);
  };

  /*logoutHandler is fired when the user clicks on the logout button inside the Navigation component */
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
        }}
      >
        <MainHeader onLogout={logoutHandler} />
        <main>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </AuthContext.Provider>
    </>
  );
}

export default App;
