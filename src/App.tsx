import React from "react";
import Home from "./pages/Home";
//import style from "../src/style.css";
import { Reset } from "styled-reset";
import { Routes, Route } from "react-router-dom";
import ClassDetails from "./pages/ClassDetails";
import Pay from "./pages/Pay";
import Community from "./pages/Community";
import GlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ClassDetail" element={<ClassDetails />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Community" element={<Community />} />
      </Routes>
    </>
  );
}

export default App;
