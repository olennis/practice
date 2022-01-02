import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
const GET_QUERY = gql`
  {
    people {
      __typename
    }
  }
`;
function App() {
  const { loading, error, data } = useQuery(GET_QUERY);
  const btnHandler = (e) => {
    console.log(data);
  };
  return (
    <div>
      <button onClick={btnHandler}>click</button>
    </div>
  );
}

export default App;
