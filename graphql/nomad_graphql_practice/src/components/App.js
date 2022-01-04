import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import Header from "./Header/Header";
const GET_QUERY = gql`
  {
    people {
      __typename
    }
  }
`;
function App() {
  const { data } = useQuery(GET_QUERY);
  const btnHandler = (e) => {
    console.log(data);
  };
  return (
    <div>
      <Header></Header>
      <button onClick={btnHandler}>click</button>
    </div>
  );
}

export default App;
