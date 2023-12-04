import React, { useState } from "react";

type todoTypes = {
  id: number;
  title: string;
  done: boolean;
};

function App() {
  const [data, setData] = useState([]);
  const [isAdd, setIsAdd] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const addTodo = () => {};

  function addEL  (el:HTMLElement, fn:(this:HTMLElement,e:KeyboardEvent)=>void) {
  
    el.addEventListener('keydown', e=> {
      fn.call(el,e)
    })
  }
  

  return (
    <div className="App">
      <div>
        {data.map((todo) => (
          <div key={todo.id}>
            <input type="checkbox" checked={todo.done}></input>
            <span>{todo.title}</span>
            <button>edit</button>
            <button>delete</button>
          </div>
        ))}
      </div>
      {isAdd ? (
        <div>
          <input
            placeholder="enter a todo"
            onChange={(e) => {
              console.log(e.target.value);
              setInputValue(e.target.value);
            }}></input>
          <button>add</button>
        </div>
      ) : (
        <button
          onClick={() => {
            setIsAdd(true);
          }}>
          add
        </button>
      )}
    </div>
  );
}

export default App;
