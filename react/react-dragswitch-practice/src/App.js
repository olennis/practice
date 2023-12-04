import logo from "./logo.svg";
import "./App.css";
import { DragSwitch } from "react-dragswitch";
import "react-dragswitch/dist/index.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <DragSwitch>
        <span>ㅈ아ㅣ러아ㅣ러댜러아</span>
      </DragSwitch>
    </div>
  );
}

export default App;
