import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="container">
          Laboris sint magna irure enim elit. Ipsum ipsum amet incididunt id.
          Quis ad eiusmod in eu veniam proident consequat elit cillum duis ea
          adipisicing. Occaecat pariatur sint proident est ipsum adipisicing
          deserunt nisi do commodo exercitation ad commodo elit. Sunt ea sint ad
          aliqua. Enim ullamco tempor aliquip culpa magna nisi ex dolore.
          Ullamco consectetur sunt officia sit reprehenderit ut mollit
          incididunt.
        </p>

        <Button variant="primary">Click</Button>
      </header>
    </div>
  );
}

export default App;
