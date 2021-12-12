import React from "react";
import { useState } from "react";

type LoginInfo = {
  id: string;
  pw: string;
};
type userInfo = {
  id: number;
  userId: string;
  userPw: string;
};
export default function Index() {
  const users = [
    { id: 1, userId: "user1", userPw: "qwer12345" },
    { id: 2, userId: "user2", userPw: "qwer1234" },
    { id: 3, userId: "user3", userPw: "qwer1234" },
  ];
  const [inputObj, setInputObj] = useState<LoginInfo>({
    id: "",
    pw: "",
  });
  const loginInputHandler = (e) => {
    setInputObj({ ...inputObj, [e.target.name]: e.target.value });
  };
  const loginBtnHandler = () => {
    users.filter((user) => {
      if (user.userId === inputObj.id && user.userPw === inputObj.pw) {
        console.log(user);
        return;
      } else {
        alert("id와 pw를 확인하세요!");
        return;
      }
    });
  };
  return (
    <div>
      <div>
        <label htmlFor="idInput">id</label>
        <input
          type="text"
          id="idInput"
          name="id"
          onChange={loginInputHandler}
        ></input>
      </div>
      <div>
        <label htmlFor="pwInput">pw</label>
        <input
          type="password"
          id="pwInput"
          name="pw"
          onChange={loginInputHandler}
        ></input>
      </div>
      <button type="button" onClick={loginBtnHandler}>
        login
      </button>
    </div>
  );
}
