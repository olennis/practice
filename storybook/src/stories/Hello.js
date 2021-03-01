import React from "react";

const Hello = ({ name, big }) => {
  if (big) {
    return <h1> hello {name}!</h1>;
  }
  return (
    <div>
      <p>hello {name}</p>
    </div>
  );
};

export default Hello;
