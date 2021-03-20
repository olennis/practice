import React, { useState } from "react";
import List from "./components/List/List";
import store from "./components/List/store";
import StoreAPI from "../src/util/storeAPI";
import { v4 as uuid } from "uuid";
function App() {
  const [data, setData] = useState(store);
  const addMoreCard = (title, listId) => {
    const newCardId = uuid();
    const newCard = {
      id: newCardId,
      title,
    };
    const list = data.lists[listId];
    list.cards = [...list.cards, newCard];

    const newState = {
      ...data,
      lists: {
        ...data.lists,
        [listId]: list,
      },
    };
    setData(newState);
  };
  return (
    <StoreAPI.Provider value={{ addMoreCard }}>
      <div className="App">
        {data.listIds.map((listId) => {
          const list = data.lists[listId];
          return <List list={list} key={listId} />;
        })}
      </div>
    </StoreAPI.Provider>
  );
}

export default App;
