import React, { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [chceckPassword, setCheckPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const onSubmit = (event) => {
    event.preventDefault();
  };
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    console.log(name, value);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "password check") {
      setCheckPassword(value);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={password}
          onChange={onChange}
        />
        <input
          name="password check"
          type="password"
          placeholder="password check"
          value={chceckPassword}
          onChange={onChange}
        />
        {password === chceckPassword ? <div>success</div> : <div>fail</div>}
        <input
          type="submit"
          value={newAccount ? "Create New Account" : "Log in"}
        />
      </form>
    </div>
  );
};

export default Auth;
