import React from "react";
import About from "./About";
import Home from "./Home";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Link to="/">??</Link>
      </div>
      <div>
        <Link to="/about">??</Link>
      </div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
