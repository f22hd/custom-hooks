import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useInView } from "./hooks/inview.hook";

function App() {
  const { isInview } = useInView(".App-link");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <div className="container">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {isInview ? "hey there" : "Learn React"}
        </a>
      </div>
    </div>
  );
}

export default App;
