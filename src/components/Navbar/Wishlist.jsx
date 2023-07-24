import React from "react";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <div style={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      height: "80vh",
      marginTop: "200px",
    }}>
      Your wishList is empty,
      <Link to="/products">Add Some favourite items</Link>
    </div>
  );
};

export default Wishlist;
