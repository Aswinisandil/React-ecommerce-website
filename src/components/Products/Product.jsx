import React, { useState } from "react";
import css from "./Product.module.css";
import { Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const media = {
    width: "300px",
    height: "400px",
  };

  const name = {
    textDecoration: 'none',
  }
 


  return (
    <>
    {(product === null)? <div> Sorry No products Available in this category</div> :
    <Card className={css.root} key={product.id}>
      <Link to= {`/product/${product.id}`} style={name}>
      <img  src={product.image.url} alt={product.name}  style={media}/>
      <CardContent>
        <div>
          <Typography variant="subtitle1" className={css.title} dangerouslySetInnerHTML={{ __html: product.description}}></Typography> 
          <Typography variant="body2" className={css.descript} >{product.name}</Typography>
          <Typography variant="body1" className={css.price}>
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
      </CardContent>
     </Link>   
    </Card>
}
    </>
    
  );
};

export default Product;
