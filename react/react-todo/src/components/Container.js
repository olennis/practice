import React, { useState } from "react";
import TodoList from "../components/TodoList";
import AddButton from "../components/AddButton";
const Container = () => {
  const [data, setData] = useState([]);
  return (
    <div>
      <TodoList data={data} setData={setData}></TodoList>
      <AddButton data={data} setData={setData}></AddButton>
    </div>
  );
};

export default Container;
