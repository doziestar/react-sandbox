import React from "react";
import ReactDOM from 'react-dom';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Dozie</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
