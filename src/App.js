import logo from "./logo3.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="container text-start b">
          Laboris sint magna irure enim elit. Ipsum ipsum amet incididunt id.
          Quis ad eiusmod in eu veniam proident consequat elit cillum duis ea
          adipisicing. Occaecat pariatur sint proident est ipsum adipisicing
          deserunt nisi do commodo exercitation ad commodo elit. Sunt ea sint ad
          aliqua. Enim ullamco tempor aliquip culpa magna nisi ex dolore.
          Ullamco consectetur sunt officia sit reprehendserit ut mollit  
          incididunt.
        </p>

        <Button variant="primary">Click</Button>
      </header>
    </div>
  );
}

export default App;
