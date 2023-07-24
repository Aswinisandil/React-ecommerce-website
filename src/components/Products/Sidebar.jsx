import React, { useState } from "react";
import css from "../Products/Sidebar.module.css";
import { useLocation } from "react-router-dom";
import SavedProducts from "./SavedProducts";

const Sidebar = ({ products, handleProducts }) => {
  const [selectValue, setSelectValue] = useState("");
  const [sortedProducts, setSortedProducts] = useState(products);

  const location = useLocation();
  const filter = [
    { name: "All Products" },
    { name: "Women" },
    { name: "Men" },
    { name: "Kids" },
    { name: "0-1000" },
    { name: "1000-5000" },
    { name: "5000 and Above" },
    { name: "Lowest first" },
    { name: "Highest first" },
    { name: "Westren" },
    { name: "Traditional" },
    { name: "Nightwear" },

  ];

  const womenProducts = products.filter((product) => {
    return (
      product.categories[0].slug === "women" ||
      product.categories[1].slug === "women"
    );
  });


  const menProducts = products.filter((product) => {
    return (
      product.categories[0].slug === "men" ||
      product.categories[1].slug === "men"
    );
  });

  const kidsProducts = products.filter((product) => {
    return (
      product.categories[1].slug === "boys" ||
      product.categories[1].slug === "girls" ||
      product.categories[0].slug === "girls" ||
      product.categories[0].slug === "boys"
    );
  });

  const firstProducts = products.filter((product) => {
    return product.price.raw > 0 && product.price.raw < 1000;
  });

  const secProducts = products.filter((product) => {
    return product.price.raw > 1000 && product.price.raw < 5000;
  });

  const thirdProducts = products.filter((product) => {
    return product.price.raw > 5000;
  });

  const ascendingProducts = [...sortedProducts].sort((a, b) => {
    return a.price.raw - b.price.raw;
  });
  const descendingProducts = [...sortedProducts].sort((a, b) => {
    return b.price.raw - a.price.raw;
  });

  const westren = products.filter((product)=> {
    return ( product.categories[1].slug === "westren" || product.categories[0].slug === "westren" 
    )
  })

  const traditional = products.filter((product)=> {
    return ( product.categories[1].slug === "traditional" || product.categories[0].slug === "traditional"
    )
  })
  
  const nightwear = products.filter((product)=> {
    return ( product.categories[1].slug === "nightwear" || product.categories[0].slug === "nightwear"
    )
  });
  



  const handleChange = (e) => {
    setSelectValue(e.target.value);
    handleProducts(products);
  };
  const handleChange1 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(womenProducts);
  };
  const handleChange2 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(menProducts);
  };
  const handleChange3 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(kidsProducts);
  };

  const handleChanges = (e) => {
    setSelectValue(e.target.value);
    handleProducts(products);
  };
  const handleChanges1 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(firstProducts);
  };
  const handleChanges2 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(secProducts);
  };
  const handleChanges3 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(thirdProducts);
  };

  const handleChanges4 = (e) => {
    setSelectValue(e.target.value);
    setSortedProducts(ascendingProducts);
    handleProducts(ascendingProducts);
  };

  const handleChanges5 = (e) => {
    setSelectValue(e.target.value);
    setSortedProducts(descendingProducts);
    handleProducts(descendingProducts);
  };

  const handleChanges6 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(westren);
  };
  const handleChanges7 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(traditional);
  };

  const handleChanges8 = (e) => {
    setSelectValue(e.target.value);
    handleProducts(nightwear);
  };


  return (
    <div className={css.container}>
      {location.pathname === "/products" && (
        <div className={css.filter}>
          <h5>Category</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="category"
              value="all"
              onChange={handleChange}
              checked={selectValue === "all"}
            />
            <label htmlFor="category"> {filter[0].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="category"
              value="women"
              onChange={handleChange1}
              checked={selectValue === "women"}
            />
            <label htmlFor="category"> {filter[1].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="category"
              value="men"
              onChange={handleChange2}
              checked={selectValue === "men"}
            />
            <label htmlFor="category"> {filter[2].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="category"
              value="kids"
              onChange={handleChange3}
              checked={selectValue === "kids"}
            />
            <label htmlFor="category"> {filter[3].name}</label>
          </div>

          <h5>Price</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="price"
              value="allproducts"
              onChange={handleChanges}
              checked={selectValue === "allproducts"}
            />
            <label htmlFor="price"> All Prices</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="price"
              value="0-1000"
              onChange={handleChanges1}
              checked={selectValue === "0-1000"}
            />
            <label htmlFor="price"> {filter[4].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="price"
              value="1000-5000"
              onChange={handleChanges2}
              checked={selectValue === "1000-5000"}
            />
            <label htmlFor="price"> {filter[5].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="price"
              value="5000 and above"
              onChange={handleChanges3}
              checked={selectValue === "5000 and above"}
            />
            <label htmlFor="sort"> {filter[6].name}</label>
          </div>
          <h5>Sort</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="sort"
              value="Lowest first"
              onChange={handleChanges4}
              checked={selectValue === "Lowest first"}
            />
            <label htmlFor="sort"> Lowest first</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="sort"
              value="Highest first"
              onChange={handleChanges5}
              checked={selectValue === "Highest first"}
            />
            <label htmlFor="price"> Highest first</label>
          </div>
          <h5>Ocassion</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="Westren"
              onChange={handleChanges6}
              checked={selectValue === "Westren"}
            />
            <label htmlFor="Ocassion"> {filter[9].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="traditional"
              onChange={handleChanges7}
              checked={selectValue === "traditional"}
            />
            <label htmlFor="Ocassion"> {filter[10].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="nightwear"
              onChange={handleChanges8}
              checked={selectValue === "nightwear"}
            />
            <label htmlFor="Ocassion"> {filter[11].name}</label>
          </div>
        </div>
        
      )}

      {location.pathname === "/men" && (
        <div className={css.filter}>
          <div className={css.filter}>
            <h5>Price</h5>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="allproducts"
                onChange={handleChanges}
                checked={selectValue === "allproducts"}
              />
              <label htmlFor="price"> All Prices</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="0-1000"
                onChange={handleChanges1}
                checked={selectValue === "0-1000"}
              />
              <label htmlFor="price"> {filter[4].name}</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="1000-5000"
                onChange={handleChanges2}
                checked={selectValue === "1000-5000"}
              />
              <label htmlFor="price"> {filter[5].name}</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="5000 and above"
                onChange={handleChanges3}
                checked={selectValue === "5000 and above"}
              />
              <label htmlFor="price"> {filter[6].name}</label>
            </div>
            <h5>Sort</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="sort"
              value="Lowest first"
              onChange={handleChanges4}
              checked={selectValue === "Lowest first"}
            />
            <label htmlFor="sort"> Lowest first</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="sort"
              value="Highest first"
              onChange={handleChanges5}
              checked={selectValue === "Highest first"}
            />
            <label htmlFor="price"> Highest first</label>
          </div>
          <h5>Ocassion</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="Westren"
              onChange={handleChanges6}
              checked={selectValue === "Westren"}
            />
            <label htmlFor="Ocassion"> {filter[9].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="traditional"
              onChange={handleChanges7}
              checked={selectValue === "traditional"}
            />
            <label htmlFor="Ocassion"> {filter[10].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="nightwear"
              onChange={handleChanges8}
              checked={selectValue === "nightwear"}
            />
            <label htmlFor="Ocassion"> {filter[11].name}</label>
          </div>
          </div>
        </div>
      )}

      {location.pathname === "/women" && (
        <div className={css.category}>
          <div className={css.filter}>
            <h5>Price</h5>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="allproducts"
                onChange={handleChanges}
                checked={selectValue === "allproducts"}
              />
              <label htmlFor="price"> All Prices</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="0-1000"
                onChange={handleChanges1}
                checked={selectValue === "0-1000"}
              />
              <label htmlFor="price"> {filter[4].name}</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="1000-5000"
                onChange={handleChanges2}
                checked={selectValue === "1000-5000"}
              />
              <label htmlFor="price"> {filter[5].name}</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="5000 and above"
                onChange={handleChanges3}
                checked={selectValue === "5000 and above"}
              />
              <label htmlFor="price"> {filter[6].name}</label>
            </div>
            <h5>Sort</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="sort"
              value="Lowest first"
              onChange={handleChanges4}
              checked={selectValue === "Lowest first"}
            />
            <label htmlFor="sort"> Lowest first</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="sort"
              value="Highest first"
              onChange={handleChanges5}
              checked={selectValue === "Highest first"}
            />
            <label htmlFor="price"> Highest first</label>
          </div>
          <h5>Ocassion</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="Westren"
              onChange={handleChanges6}
              checked={selectValue === "Westren"}
            />
            <label htmlFor="Ocassion"> {filter[9].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="traditional"
              onChange={handleChanges7}
              checked={selectValue === "traditional"}
            />
            <label htmlFor="Ocassion"> {filter[10].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="nightwear"
              onChange={handleChanges8}
              checked={selectValue === "nightwear"}
            />
            <label htmlFor="Ocassion"> {filter[11].name}</label>
          </div>
          </div>
        </div>
      )}

      {location.pathname === "/kids" && (
        <div className={css.category}>
          <div className={css.filter}>
            <h5>Price</h5>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="allproducts"
                onChange={handleChanges}
                checked={selectValue === "allproducts"}
              />
              <label htmlFor="price"> All Prices</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="0-1000"
                onChange={handleChanges1}
                checked={selectValue === "0-1000"}
              />
              <label htmlFor="price"> {filter[4].name}</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="1000-5000"
                onChange={handleChanges2}
                checked={selectValue === "1000-5000"}
              />
              <label htmlFor="price"> {filter[5].name}</label>
            </div>
            <div className={css.category}>
              <input
                type="radio"
                name="price"
                value="5000 and above"
                onChange={handleChanges3}
                checked={selectValue === "5000 and above"}
              />
              <label htmlFor="price"> {filter[6].name}</label>
            </div>
            <h5>Sort</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="sort"
              value="Lowest first"
              onChange={handleChanges4}
              checked={selectValue === "Lowest first"}
            />
            <label htmlFor="sort"> Lowest first</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="sort"
              value="Highest first"
              onChange={handleChanges5}
              checked={selectValue === "Highest first"}
            />
            <label htmlFor="price"> Highest first</label>
          </div>
          <h5>Ocassion</h5>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="Westren"
              onChange={handleChanges6}
              checked={selectValue === "Westren"}
            />
            <label htmlFor="Ocassion"> {filter[9].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="traditional"
              onChange={handleChanges7}
              checked={selectValue === "traditional"}
            />
            <label htmlFor="Ocassion"> {filter[10].name}</label>
          </div>
          <div className={css.category}>
            <input
              type="radio"
              name="Ocassion"
              value="nightwear"
              onChange={handleChanges8}
              checked={selectValue === "nightwear"}
            />
            <label htmlFor="Ocassion"> {filter[11].name}</label>
          </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
