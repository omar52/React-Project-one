import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="products">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
