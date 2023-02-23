import React, { useEffect, useState } from "react";
import axios from "axios";
import "./product.css";

const Products = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    listOfProduct();
  }, []);
  const listOfProduct = async () => {
    const listOfProduct = fetch("http://localhost:3000/Product").then(
      (result) => {
        result.json().then((resp) => {
          console.log("Response", resp);
          setProduct(resp);
        });
      }
    );
  };

  return (
    <div className="listOfProduct">
      {product.map((item) => {
        return (
          <>
            <div className="productInfo">
              <h5 className="prductTittle">{item.title}</h5>
              <p className="productPrice">{item.name}</p>
              <div className="productRating">{item.price}</div>
              <img className="productImage" src={item.image} />
              <button className="buttonAddToBasket">Add to Basket</button>
            </div>
          </>
        );
      })}
    </div>
  );
};
export default Products;
