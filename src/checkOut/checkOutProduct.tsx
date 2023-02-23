import React, { useEffect, useState } from "react";
import "./checkOut.css";
const CheckOutProduct = () => {
  return (
    <>
      <div className="checkOutProductList">
        <img className="imgCheckOutProduct" />
        <div className="checkOutProduct">
          <h4>heading of the Product </h4>
          <h4>name</h4>
          <h4>price</h4>
        </div>
      </div>
    </>
  );
};
export default CheckOutProduct;
