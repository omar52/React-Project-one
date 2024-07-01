import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Router from "./Router/Router";
import { useState } from "react";
import { LanguageContext } from "./context/Language";

function App() {
  const [contextLang, setContextLang] = useState("En");
  return (
    <div className="App">
      <BrowserRouter>
        <div
          className={contextLang === "Ar" ? "text-right" : "text-start"}
          dir={contextLang === "Ar" ? "rtl" : "ltr"}
        >
          <LanguageContext.Provider value={{ contextLang, setContextLang }}>
            <Header />
            <div className="products container">
              <Router />
            </div>
          </LanguageContext.Provider>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
