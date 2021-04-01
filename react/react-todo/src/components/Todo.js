import React from "react";

const Todo = ({ todo, setData, data }) => {
  const deleteTodo = (e) => {};
  return (
    <div value={todo.id}>
      <input type="checkbox"></input>
      <div>{todo.title}</div>
      <button onClick={console.log(todo.id)}>X</button>
    </div>
  );
};

export default Todo;
