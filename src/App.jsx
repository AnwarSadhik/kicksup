// import React from 'react'
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/nav/Navbar";
import Store from "./pages/store/Store";
import Journey from "./pages/journey/Journey";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Product from "./components/product/Product";

export default function App() {
   return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
}
