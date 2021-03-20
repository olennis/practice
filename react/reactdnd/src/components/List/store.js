const cards = [
  { id: "card-1", title: "test-1" },
  { id: "card-2", title: "test-2" },
  { id: "card-3", title: "test-3" },
];
const data = {
  lists: {
    "list-1": {
      id: "list-1",
      title: "Test",
      cards,
    },
  },
  listIds: ["list-1"],
};

export default data;
