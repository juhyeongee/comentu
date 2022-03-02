import React from "react";
import styled from "styled-components";
import Home from "./components/Home";
//import style from "../src/style.css";
import { Routes, Route } from "react-router-dom";
import ClassDetails from "./components/ClassDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ClassDetail" element={<ClassDetails />} />
    </Routes>
  );
}

export default App;
