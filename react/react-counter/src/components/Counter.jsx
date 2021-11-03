import { useRecoilState } from "recoil";
import { counterState, stateTest } from "../state";
function Counter() {
  const [count, setCount] = useRecoilState(counterState);
  const [test, settest] = useRecoilState(stateTest);
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>숫자 증가</button>
      <button onClick={() => setCount(count - 1)}>숫자 감소</button>
      <div>{test}</div>
    </div>
  );
}

export default Counter;
