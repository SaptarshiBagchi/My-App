import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Bagchi is here</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          To Own
        </a>
        <Button variant="primary">Primary</Button>{" "}
      </header>
    </div>
  );
}

export default App;
