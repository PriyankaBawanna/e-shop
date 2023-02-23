import React from "react";
import "./homePage.css";
import ecommerceImage from "@assets/ecommerceImage.jpg";
import Products from "@product/Product";
import Header from "@header/header";
const HomePage = () => {
  return (
    <>
      <Header />
      <img src={ecommerceImage} className="homePageImage" />

      <div className="rowOfTwoProduct">
        <Products />
      </div>
    </>
  );
};
export default HomePage;
