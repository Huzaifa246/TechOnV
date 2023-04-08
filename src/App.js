import React from "react";
import "./index.css";

import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Navbar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
