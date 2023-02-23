import "./header.css";
import { useState } from "react";
import StoreIcon from "@mui/icons-material/Store";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <StoreIcon className="iconLogo" fontSize="large" />
        </Link>

        <Link to="/" className="eShop">
          <b>eShop</b>
        </Link>
      </div>
      <div className="headerSerach">
        <input type="text" className="inputBox" />
        <SearchIcon className="searchIcon" />
      </div>
      <div className="userCart">
        <div className="signUp">
          <div className="user">Hello Guest </div>
          <div className="signup">
            <b>Signup</b>
          </div>
        </div>
        <div className="signUp">
          <div className="user">your </div>
          <div className="signup">
            <b>Shop</b>
          </div>
        </div>
        <div className="cart">
          <Link to="/checkOut">
            <ShoppingBasketIcon className="cartIcon" />
          </Link>
          <div className="addItem">0</div>
        </div>
      </div>
    </div>
  );
};
export default Header;
