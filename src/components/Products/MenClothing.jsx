import React, {useState, useEffect} from "react";
import css from "./MenClothing.module.css";
import Sidebar from "./Sidebar";
import Product from "./Product";

const MenClothing = ({ products }) => {

  const handleProducts = (value)=>{
    setItems(value);
  }

  const storedItems = localStorage.getItem("menProducts");
  
        console.log(storedItems);

        products = JSON.parse(storedItems);

        console.log(products);
  
  const menProducts = Object.keys(products)
    .map((key) => products[key])
    .filter((product) => {
      
      return product.categories[0].slug === "men" || 
      product.categories[1].slug === "men"
    });

    console.log(menProducts);
    let [items, setItems] = useState(menProducts);

    useEffect(()=>{
      setItems(products);
    },[])



  return (
    <main className={css.container}>
        <div className={css.categoryflex}>
          <Sidebar products={menProducts} handleProducts={handleProducts} />
        </div>
        
        <div className={css.productflex}>
          <h3>Men's Wear</h3>
          <p className={css.offer}>
          Men, get set to say hello to a super snazzy wardrobe with AJIO! From eye-catching tees to crisp formal trousers, our collection features the best of men’s fashion from brands like Jack & Jones, Indian Terrain, John Players and many more!</p>
        
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

export default MenClothing;





