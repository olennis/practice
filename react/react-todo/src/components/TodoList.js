import React from "react";
import Todo from "./Todo";

const TodoList = ({ data, setData }) => {
  return (
    <div>
      <div>TodoList</div>
      {data.map((todo) => (
        <Todo key={todo.id} todo={todo} setData={setData} data={data}></Todo>
      ))}
    </div>
  );
};

export default TodoList;
