import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [full_paper_data, setStudentMessage] = useState();
  useEffect(() => {
    fetch("/bar/api/full_paper/list")
      .then((res) => res.json())
      .then((data) => setStudentMessage(data))
      .catch(console.error);
  }, [setStudentMessage]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{full_paper_data ? full_paper_data.map((paper) => (
          <li>
            <strong>Paper ID:</strong> {paper.paper_base_id} <br />
            <strong>Student Name:</strong> {paper.student_name} <br />
            <strong>Student ID:</strong> {paper.student_email || "N/A"}<br />
            <strong>Title: </strong> {paper.title} <br />
            <strong>Teacher Name:</strong> {paper.teacher_name} <br />
            <strong>Teacher ID:</strong> {paper.teacher_id} <br />
            <strong>Teacher Email:</strong> {paper.teacher_email || "N/A"} <br />
          </li>
        )) : "Loading..."}</p>
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
