import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../assets/pages/Home";
import About from "../assets/pages/About";
import Shop from "../assets/pages/Shop";
import Error from "../assets/pages/Error";
import Navbar from "../assets/pages/Navbar";

function RouterDemo() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home/>}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default RouterDemo;
