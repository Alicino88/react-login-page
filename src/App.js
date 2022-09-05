import Login from "./Components/Login/Login.js";
import { useState } from "react";
import Home from "./Components/Home/Home.js";

function App() {
  /*when the user enters a valid email and password (Login component) he logs in and the Home component is shown */
  const [isLoggedIn, SetIsLoggedIn] = useState(false);
  const loginHandler = (email, password) => {
    console.log(email, password);
    SetIsLoggedIn(true);
  };
  return (
    <main>
      {!isLoggedIn && <Login onLogin={loginHandler} />}
      {isLoggedIn && <Home />}
    </main>
  );
}

export default App;
