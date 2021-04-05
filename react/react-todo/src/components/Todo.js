import React, { useState } from "react";

const Todo = ({ todo, setData, data }) => {
  const [editValue, setEditValue] = useState(todo.title);
  const [editInput, setEditInput] = useState(false);
  const deleteTodo = (e) => {
    setData(data.filter((todo) => Number(e.target.value) !== todo.id));
  };
  const onChange = (e) => {
    setEditValue(e.target.value);
  };
  const editTodo = (e) => {
    let tempArr = data.slice();
    for (let i = 0; i < tempArr.length; i += 1) {
      if (tempArr[i].id === Number(e.target.value)) {
        tempArr[i].title = editValue;
      }
    }
    setData(tempArr);
    console.log(data);
    setEditInput(false);
  };

  return (
    <div>
      <input type="checkbox"></input>
      {editInput ? (
        <div>
          <input onChange={onChange} placeholder={todo.title}></input>
          <button onClick={editTodo} value={todo.id}>
            edit
          </button>
        </div>
      ) : (
        <div onClick={() => setEditInput(true)}>{todo.title}</div>
      )}

      <button value={todo.id} onClick={deleteTodo}>
        delete
      </button>
    </div>
  );
};

export default Todo;
