import React from "react";

function Login() {
  const loginHandler = () => {
    console.log("login");
  };
  return (
    <div>
      <div>
        <label htmlFor="#idInput">id</label>
        <input id="idInput" type="text"></input>
      </div>
      <div>
        <label htmlFor="#pwInput">pw</label>
        <input id="pwInput" type="password"></input>
      </div>
      <button type="button" onClick={loginHandler}>
        click
      </button>
    </div>
  );
}

export default Login;
