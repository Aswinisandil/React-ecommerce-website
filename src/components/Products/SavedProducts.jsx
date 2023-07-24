import React, { useEffect } from "react";

const SavedProducts = ({ items, cartitems}) => {

  const womenProducts = items.filter((product) => {
    return (
      product.categories[0].slug === "women" ||
      product.categories[1].slug === "women"
    );
  });


  const menProducts = items.filter((product) => {
    return (
      product.categories[0].slug === "men" ||
      product.categories[1].slug === "men"
    );
  });

  const kidsProducts = items.filter((product) => {
    return (
      product.categories[1].slug === "boys" ||
      product.categories[1].slug === "girls" ||
      product.categories[0].slug === "girls" ||
      product.categories[0].slug === "boys"
    );
  });



  const filter = [
    { products: items },
    { name: womenProducts },
    { name: menProducts },
    { name: kidsProducts },
   

  ];

  console.log(filter);
    localStorage.setItem("products",(JSON.stringify(items)));
    localStorage.setItem("womenProducts",(JSON.stringify(womenProducts)));
    localStorage.setItem("menProducts",(JSON.stringify(menProducts)));
    localStorage.setItem("kidsProducts",(JSON.stringify(kidsProducts)));
    localStorage.setItem("cart",(JSON.stringify(cartitems)));



  return (
    <div>
      *
    </div>
  );
};

export default SavedProducts;