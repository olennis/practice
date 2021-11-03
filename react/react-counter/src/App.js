import "./App.css";
import Counter from "./components/Counter";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <Counter></Counter>
      </RecoilRoot>
    </div>
  );
}

export default App;
