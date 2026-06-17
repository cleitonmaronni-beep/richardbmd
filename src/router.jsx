import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Regulamento from "./routes/Regulamento.jsx";
import Tutoriais from "./routes/Tutoriais.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/regulamento" element={<Regulamento />} />
        <Route path="/tutoriais" element={<Tutoriais />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
