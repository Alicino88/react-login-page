import Login from "./Components/Login/Login.js";
import { useContext } from "react";
import Home from "./Components/Home/Home.js";
import MainHeader from "./Components/MainHeader/MainHeader.js";
import AuthContext from "./Context/auth-context.js";

function App() {
  const ctx = useContext(AuthContext);

  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </>
  );
}

export default App;
