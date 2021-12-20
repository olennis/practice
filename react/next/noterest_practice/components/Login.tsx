import React, { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";

function Login() {
  const loginHandler = () => {
    console.log(loginState);
  };
  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginState({
      ...loginState,
      [e.target.name]: e.target.value,
    });
    console.log(loginState);
  };
  const [loginState, setLoginState] = useRecoilState(userState);
  return (
    <div>
      <div>
        <label htmlFor="#idInput">id</label>
        <input
          id="idInput"
          type="text"
          name="id"
          onChange={inputHandler}></input>
      </div>
      <div>
        <label htmlFor="#pwInput">pw</label>
        <input
          id="pwInput"
          name="pw"
          type="password"
          onChange={inputHandler}></input>
      </div>
      <button type="button" onClick={loginHandler}>
        click
      </button>
    </div>
  );
}

export default Login;
