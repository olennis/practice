type Test = {
  name: string;
  age: number;
};
const person: Test = {
  name: "donghun",
  age: 40,
};

const people: Test[] = [
  {
    name: "donghun",
    age: 10,
  },
  {
    name: "kim",
    age: 10,
  },
  {
    name: "kay",
    age: 10,
  },
  {
    name: "ke",
    age: 10,
  },
];
//narrowing, assertion
function test(x: number | string) {
  let arr: number[] = [];
  arr[0] = x as number; // 타입 변경이 아닌 유니언 타입 구분용 문법 as, 비상용
}
let literalTest: string | number;
function literalFunction(a) {
  literalTest = 3;
}

//함수 type alias
type FunctionType = (a: string) => string;
const function1: FunctionType = function () {
  return "123";
};

// html 요소 바꾸기 - narrowing 사용
let link = document.querySelector(".link");
if (link !== null) {
  link.innerHTML = "HELLO";
}
