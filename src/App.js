import Login from "./Components/Login/Login.js";
import { useState } from "react";

function App() {
  const loginHandler = (email, password) => {
    console.log(email, password);
  };
  return (
    <div>
      <Login onLogin={loginHandler} />
    </div>
  );
}

export default App;
