import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav.js";
import Search from "./components/Search.js";
import ReactQuery from "./components/Query/query.js";

// import Products from "./components/Products.js";
import Electronics from "./components/Electronics.js";
import Jewelery from "./components/Jewelery.js";
import MensClothing from "./components/MensClothing";
import ProductDetails from "./components/ProductDetails";
import WomensClothing from "./components/WomensClothing";
import Footer from "./components/Footer/Footer.js";
import "./App.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (search) => {
    setSearchTerm(search);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Search handleSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<ReactQuery searchTerm={searchTerm} />} />
          <Route
            path="/electronics"
            element={<Electronics searchTerm={searchTerm} />}
          />
          <Route
            path="/jewelery"
            element={<Jewelery searchTerm={searchTerm} />}
          />
          <Route
            path="/mens-clothing"
            element={<MensClothing searchTerm={searchTerm} />}
          />
          <Route
            path="/womens-clothing"
            element={<WomensClothing searchTerm={searchTerm} />}
          />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
