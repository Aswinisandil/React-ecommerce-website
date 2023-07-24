import React, { useEffect } from "react";

const SavedCart = ({cartproducts,fetchCart}) => {

    fetchCart();

    localStorage.setItem("cart",(JSON.stringify(cartproducts)));

   console.log(cartproducts);

  return (
    <div>.</div>
  )
}

export default SavedCart