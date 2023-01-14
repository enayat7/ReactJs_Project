import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import ProductList from "./component/ProductList";
import React, { useState } from "react";
import Footer from "./component/Footer.js";
import AddItem from "./component/AddItem";

function App() {
  let product = [
    {
      price: 99999,
      name: "IPhone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
    {
      price: 15000,
      name: "Redmi K20 Pro",
      quantity: 0,
    },
  ];
  let [productList, setproductlist] = useState(product);

  let [totalAmount, setotalamount] = useState(0);
  // console.log(productList[0].quantity)
  const increamentquantity = (index) => {
    // console.log("enayat")
    let newproductlist = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount += productList[index].price;
    newproductlist[index].quantity++;
    setproductlist(newproductlist);
    setotalamount(newtotalAmount);
  };

  const decreamentquantity = (index) => {
    let newproductlist = [...productList];
    if (newproductlist[index].quantity != 0) {
      let newtotalAmount = totalAmount;
      newproductlist[index].quantity--;
      newtotalAmount -= newproductlist[index].price;
      setotalamount(newtotalAmount);
      setproductlist(newproductlist);
    }
  };
  const resetquantity = () => {
    let resetvalue = [...productList];
    resetvalue.map((product) => {
      product.quantity = 0;
    });
    setproductlist(resetvalue);
    setotalamount(0);
  };

  const removeitems = (index) => {
    let newproductlist = [...productList];
    let newtotalAmount = totalAmount;
    newtotalAmount -=
      newproductlist[index].quantity * newproductlist[index].price;
    newproductlist.splice(index, 1);
    setproductlist(newproductlist);
    setotalamount(newtotalAmount);
  };

  const addItem = (name, price) => {
    let newproductlist = [...productList];
    newproductlist.push({ name: name, price: price, quantity: 0 });
    setproductlist(newproductlist);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <AddItem addItem={addItem} />
        <ProductList
          productList={productList}
          increamentquantity={increamentquantity}
          decreamentquantity={decreamentquantity}
          removeitems={removeitems}
        />
      </main>
      <Footer totalAmount={totalAmount} resetquantity={resetquantity} />
    </>
  );
}
export default App;
