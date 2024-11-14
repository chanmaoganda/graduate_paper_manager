import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState();
  useEffect(() => {
    fetch("/bar/api/student/list")
      .then((res) => res.json())
      .then((res) => setMessage(`Hello with ${res.length} students`))
      .catch(console.error);
  }, [setMessage]);
  useEffect(() => {
    fetch("/bar/api/teacher/list")
      .then((res) => res.json())
      .then((res) => setMessage(`Hello with ${res.length} teachers`))
      .catch(console.error);
  }, [setMessage]);
  useEffect(() => {
    fetch("/bar/api/paper/list")
      .then((res) => res.json())
      .then((res) => setMessage(`Hello with ${res.length} papers`))
      .catch(console.error);
  }, [setMessage]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message || "Loading..."}</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
