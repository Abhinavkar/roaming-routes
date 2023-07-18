import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Packages from "./Pages/Packages";
import Home from "./Home";
import Signin from "./Signin";
// import Test from "./Pages/Test";
import Destination from "../newcomponents/destination";
import BookingPackages from "../newcomponents/packages";
import Price from "../newcomponents/price";
import ImagePack from "../newcomponents/imagePack";
import Trips from "../newcomponents/Trips";


export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/signin" element={<Signin />} />

      <Route path="/signin/packages" element={<Packages />}></Route>
      <Route path="/destination" element={<Destination />} />
      <Route path="/bookingPackages" element={<BookingPackages />} />
      <Route path="/images" element={<ImagePack />} />
      <Route path="/price" element={<Price />} />
      <Route path="/trips" element={<Trips />} />

    </Routes>
  );
}
