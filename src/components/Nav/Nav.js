import React from "react";
import { NavLink } from "react-router-dom";
import online from "./online-shopping.png";
import Cart from "./shopping-cart.png";
// import Electronics from "../../pages/Electronics";
// import Jewerly from "../../pages/Jewerly";
// import Products from "../Products";
// import WomensClothing from "../../pages/WomensClothing";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="NAVBAR">
      <img src={online} alt="logo" className="logo" />
      <h1>
        {" "}
        <span className="Amil">Ami</span>
        <span className="Express">Express</span>{" "}
        <span className="Company">TM</span>-place where all of your dreams come
        true!
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/electronics" activeClassName="active">
              Electronics
            </NavLink>
          </li>
          <li>
            <NavLink to="/jewelery" activeClassName="active">
              Jewelery
            </NavLink>
          </li>
          <li>
            <NavLink to="/mens-clothing" activeClassName="active">
              Men`s Clothing
            </NavLink>
          </li>
          <li>
            <NavLink to="/womens-clothing" activeClassName="active">
              Women`s Clothing
            </NavLink>
          </li>
        </ul>
        <img src={Cart} alt="logo" className="ShoppingCart" />
      </nav>
      {/* <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewerly" element={<Jewerly />} />
        <Route path="/mens-clothing" element={<Products />} />
        <Route path="/womens-clothing" element={<WomensClothing />} />
      </Routes> */}
    </div>
  );
};

export default Nav;
