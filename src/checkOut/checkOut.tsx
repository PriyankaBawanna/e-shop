import React, { useEffect, useState } from "react";
import "./checkOut.css";
import Header from "@header/header";
import add from "@assets/add.jpg";
import CheckOutProduct from "./checkOutProduct";
import SubTotal from "./subTotal";

const ChechOut = () => {
  return (
    <>
      <Header />
      <div className="checkOutPage">
        <div className="leftSideShoppingList">
          <img src={add} className="add" />

          <div className="productlist">
            <h2>Your Shopping Basket </h2>
            <CheckOutProduct />
          </div>
        </div>
        <div className="rightSideShoopingBil">
          <SubTotal />
        </div>
      </div>
    </>
  );
};
export default ChechOut;
