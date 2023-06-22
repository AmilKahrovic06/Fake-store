import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";

import ReactQuery from "./components/Query/query.js";

import Products from "./components/Products.js";
import Electronics from "./pages/Electronics";
import Jewerly from "./pages/Jewerly";
import MensClothing from "./pages/MensClothing";
import ProductDetails from "./components/ProductDetails";
import WomensClothing from "./pages/WomensClothing";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <ReactQuery />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewelery" element={<Jewerly />} />
          <Route path="/mens-clothing" element={<MensClothing />} />
          <Route path="/womens-clothing" element={<WomensClothing />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
