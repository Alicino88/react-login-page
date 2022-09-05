import { useState } from "react";
function Login() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
    console.log(enteredEmail);
  };

  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value);
    console.log(enteredPassword);
  };
  return (
    <form>
      <div>
        <label htmlFor="email">E-Mail</label>
        <input type="email" onChange={emailChangeHandler} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" onChange={passwordChangeHandler} />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default Login;
