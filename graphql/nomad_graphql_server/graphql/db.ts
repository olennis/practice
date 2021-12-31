export type People = {
  id: number;
  name: string;
  age: number;
};
export const people: People[] = [
  { id: 0, name: "a", age: 18 },
  { id: 1, name: "b", age: 18 },
  { id: 2, name: "c", age: 18 },
  { id: 3, name: "d", age: 18 },
  { id: 4, name: "e", age: 18 },
  { id: 5, name: "f", age: 18 },
  { id: 6, name: "g", age: 18 },
];
export const getById = (id: number) => {
  const filterdArr = people.filter((person) => person.id === id);
  return filterdArr[0];
};
