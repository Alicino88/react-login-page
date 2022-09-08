import { useEffect, useState, useContext } from "react";
import AuthContext from "../../Context/auth-context";
import classes from "./Login.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  /*formIsValid controls whether the submit button is disabled or not.*/

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    /*below code to check the input only after the user has stopped typing for 2 secs. This is to prevent to check
    for every keystroke (debouncing technique). To achieve this we use cleanup function and clearTimeout.
    HOW IT WORKS: Whenever we type (either inside email or password field) a new setTimeout function is fired (as useEffect is fired).
    By adding a cleanup function, when we type we clear the previous timeout (with clearTimeout) and, by doing so, the condition is checked
    only after 2 seconds after the last character we have typed.*/

    const identifier = setTimeout(() => {
      /*console.log("Checking form validity!");*/
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    /* below cleanup function that runs everytime before useEffect side effect function runs and before the component unmounts.*/
    return () => {
      /*console.log("Cleanup runs");*/
      clearTimeout(identifier);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
  };

  /*setEmailIsValid and setPasswordIsValid affect the dynamic css for the input elements*/
  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
