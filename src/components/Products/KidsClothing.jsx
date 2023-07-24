import React, { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import Product from "./Product";
import css from "./KidsClothing.module.css";

const KidsClothing = ({ products }) => {
  const handleProducts = (value) => {
    setItems(value);
  };

  const storedItems = localStorage.getItem("kidsProducts");
  
  console.log(storedItems);

  products = JSON.parse(storedItems);

  console.log(products);

  const kidsProducts = Object.keys(products)
    .map((key) => products[key])
    .filter((product) => {
      return (
        product.categories[1].slug === "boys" ||
        product.categories[1].slug === "girls" ||
        product.categories[0].slug === "girls" ||
        product.categories[0].slug === "boys"
      );
    });

  console.log(products);
  let [items, setItems] = useState(kidsProducts);

  useEffect(()=>{
    setItems(products);
  },[])


  return ( 
   
      <main className={css.container}>
        <div className={css.categoryflex}>
          <Sidebar products={kidsProducts} handleProducts={handleProducts} />
        </div>
        
        <div className={css.productflex}>
          <h3>Kids Wear</h3>
          <p className={css.offer}>
            Get your latest kids wear for your boys and girls from your favourite brands such as GAP KIDS, LEVIS,etc, at affordable prices with jaw-dropping discounts on the Big Bold Sale!
          </p>
        
          {items.length === 0 ? (
            <h5 className={css.noproducts}>No products available</h5>
          ) : (
            <div className={css.products}>
              {items.map((product) => (
                <div key={product.id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main> 
    );
    
};

export default KidsClothing;



