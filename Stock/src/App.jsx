import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Stock from "./Pages/Stock";
import NavBar from "./Components/NavBar";

function App() {
  const [chosenStock, setChosenStock] = useState({});
  return (
    <div className="App">
      {/* we don't want to use an <a>tag because it will rerender the page */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* we can create our own url parameter with /:symbol */}
        <Route path="/about" element={<About />} />
        <Route
          path="/stocks/:symbol"
          element={<Stock chosenStock={chosenStock} />}
        />
        <Route
          path="/stocks"
          element={<Dashboard setChosenStock={setChosenStock} />}
        />
      </Routes>
    </div>
  );
}

export default App;
