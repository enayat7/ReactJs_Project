import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          increamentquantity={props.increamentquantity}
          index={i}
          decreamentquantity={props.decreamentquantity}
          removeitems={props.removeitems}
        />
      );
    })
  ) : (
    <h1>
      No Items are present in the Cart
      <br /> So, get lost u motherfucker{" "}
    </h1>
  );
}
