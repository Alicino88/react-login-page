import Login from "./Components/Login/Login.js";
import { useState } from "react";
import Home from "./Components/Home/Home.js";
import MainHeader from "./Components/MainHeader/MainHeader.js";

function App() {
  /*initially the Login component is shown. When the user enters a valid email and password (Login component) he logs in and the Home component is shown,
  also the MainHeader changes*/
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = (email, password) => {
    console.log(email, password);
    setIsLoggedIn(true);
  };

  /*logoutHandler is fired when the user clicks on the logout button inside the Navigation component */
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
