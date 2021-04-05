import React from "react";
import Todo from "./Todo";

const TodoList = ({ data, setData }) => {
  return (
    <div>
      <h1 onClick={() => console.log("hello?")}>TodoList Practice</h1>
      {data.map((todo) => (
        <Todo key={todo.id} todo={todo} setData={setData} data={data}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
