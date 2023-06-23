import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Packages from "./Pages/Packages";
import Home from "./Home";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/packages" element={<Packages />} />
    </Routes>
  );
}
