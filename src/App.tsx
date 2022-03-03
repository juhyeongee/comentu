import React from "react";
import Home from "./pages/Home";
//import style from "../src/style.css";
import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";
import ClassDetails from "./pages/ClassDetails";
import Pay from "./pages/Pay";

function App() {
  return (
    <>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ClassDetail" element={<ClassDetails />} />
        <Route path="/Pay" element={<Pay />} />
      </Routes>
    </>
  );
}

export default App;
