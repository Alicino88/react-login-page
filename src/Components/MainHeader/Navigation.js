import { useContext } from "react";
import AuthContext from "../../Context/auth-context";
import classes from "./Navigation.module.css";
/*if isLoggedIn is true then the list components are shown, otherwise the ul remains empty */
const Navigation = () => {
  const ctx = useContext(AuthContext);
  console.log(ctx);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
