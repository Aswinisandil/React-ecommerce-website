import React,{useState,useEffect} from "react";
import Product from "./Product";
import css from "./WomenClothing.module.css";
import Sidebar from "./Sidebar";



const WomenClothing = ({ products }) => {

  const handleProducts = (value)=>{
    setItems(value);
  }

  const storedItems = localStorage.getItem("womenProducts");
  
        console.log(storedItems);

        products = JSON.parse(storedItems);

        console.log(products);

  const womenProducts = Object.keys(products)
    .map((key) => products[key])
    .filter((product) => {
      
      return product.categories[0].slug === "women" || product.categories[1].slug === "women";
    });

    let [items, setItems] = useState(womenProducts);

    

    useEffect(()=>{
      setItems(products);
    },[])

  return (
    <main className={css.container}>
      <div className={css.categoryflex}>
        <Sidebar products={womenProducts} handleProducts={handleProducts} />
      </div>

      <div className={css.productflex}>
        <h3> Women's Wear</h3>
        <p className={css.offer}>
        Elegant shrugs, modish cold shoulder tops, sassy skater dresses, AJIO’s nifty range of western wear for women is all encompassing. The chic curated collection is brought to you by powerhouse brands such as Marks & Spencer, Vero Moda & Pantaloons.
        </p>
        <div className={css.products}>
  
          {
          items.map((product) => (
            <div item key={product.id}>
              <Product product={product} />
            </div>
          ))}
      
        </div>
      </div>
    </main>
  );
};

export default WomenClothing;
