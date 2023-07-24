import React, { useEffect, useState } from "react";
import Product from "./Product";
import Sidebar from "./Sidebar";
import css from "./Products.module.css";
import SavedProducts from "./SavedProducts";
import PropagateLoader from "react-spinners/PropagateLoader";

const Products = ({ products, fetchProducts, searchItems,cart }) => {
  let [items, setItems] = useState(products);
  const [loading, setLoading] = useState(true);
  const [colour, setColour] = useState("#2c4152");

  const handleProducts = (value) => {
    setItems(value);
  };

  console.log(items);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    !items ? setLoading(false) : setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("second", loading);
    }, 3000);
  }, []);

  useEffect(() => {
    if (searchItems.length > 0) {
      setItems(searchItems);
    } else {
      setItems(products);
    }
  }, [searchItems, products]);

  const storedItems = localStorage.getItem("products");

  console.log(storedItems);

  const totalItems = JSON.parse(storedItems);

  console.log(totalItems);

  useEffect(() => {
    setItems(totalItems);
  },[]);

  return (
    <>
      {loading ? (
        <div className={css.contain}>
          <PropagateLoader
            color="#2c4152"
            cssOverride={{}}
            loading
            speedMultiplier={1}
          />
        </div>
      ) : (
          <main className={css.container}>
            <div className={css.categoryflex}>
              <Sidebar products={products} handleProducts={handleProducts} />
            </div>

            <div className={css.productflex}>
              <h3> Big Bold Sale is Live</h3>
              <h5 className={css.offer}>
                {" "}
                Buy your favorite products from your favourite brands at
                jaw-dropping discounts!
              </h5>

              <div className={css.products}>
                {items.map((product) => (
                  <div item key={product.id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
            </div>
            <SavedProducts items={products} cartitems={cart} />
          </main>
      )
      }
    </>
  );
};

export default Products;
