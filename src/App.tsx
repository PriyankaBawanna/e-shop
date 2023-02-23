import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import HomePage from "./home/home";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import ChechOut from "./checkOut/checkOut";
function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkOut" element={<ChechOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
