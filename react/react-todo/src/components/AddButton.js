import React, { useState } from "react";
let nextId = 0;
const AddButton = ({ data, setData }) => {
  const [inputValue, setInputValue] = useState({});
  const [isInput, setIsInput] = useState(false);
  const onChange = (e) => {
    let tempObj = {
      id: nextId,
      title: e.target.value,
      checked: true,
    };
    setInputValue(tempObj);
  };
  const onClick = () => {
    nextId++;
    setData(data.concat(inputValue));
    setInputValue({});
    setIsInput(false);
  };

  return (
    <div>
      {isInput ? (
        <div>
          <input placeholder="enter todo" onChange={onChange}></input>
          <button onClick={onClick}>add</button>
        </div>
      ) : (
        <button onClick={() => setIsInput(true)}>+</button>
      )}
    </div>
  );
};

export default AddButton;
