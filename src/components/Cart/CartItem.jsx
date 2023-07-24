import React, { useEffect, useState } from "react";
import css from "./CartItem.module.css";
import PropagateLoader from "react-spinners/PropagateLoader";

import {
  Typography,
  CardActions,
  Button,
  CardContent,
  Card,
} from "@mui/material";

const CartItem = ({
  item,
  handleUpdateCartQty,
  handleRemoveFromCart,
  fetchCart,
  cart
}) => {
  const price = item?.price.raw;
  const discountedPrice = (40 * price) / 100;
  const round = parseFloat(discountedPrice.toFixed(0));
  const final = price - round;
  const [colour, setColour] = useState("#2c4152");
  const [loading, setLoading] = useState(true);

  const override = {
    display: "block",
    margin: "200px",
    borderColor: "red",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    fetchCart();
    setLoading(false);

  }, [cart,item,fetchCart]);

  if (!cart) {
    return (
      <div className={css.contain}>
        <PropagateLoader
          colour="#2c4152"
          cssOverride={{}}
          loading
          speedMultiplier={1}
        />
      </div>
    );
  }

  return (
        <>
          <Card className={css.container}>
            <img className={css.image} src={item.image.url} alt={item.name} />
            <CardContent className={css.title}>
              <Typography variant="subtitle2">{item.name}</Typography>
              {/* <Typography variant="subtitle2">Size: {size}</Typography> */}
            </CardContent>

            <CardActions className={css.actions}>
              <Button
                type="button"
                size="medium"
                onClick={() => {
                  item?.quantity === 0
                    ? localStorage.removeItem(`productSizes.${item.id}`)
                    : handleUpdateCartQty(item.id, item?.quantity - 1);
                }}
              >
                -
              </Button>
              <Typography variant="subtitle2">Qty: {item.quantity}</Typography>
              <Button
                type="button"
                size="medium"
                onClick={() => handleUpdateCartQty(item.id, item?.quantity + 1)}
              >
                +
              </Button>
            </CardActions>
            <div className={css.priceslab}>
              <p className={css.savings}>Savings: Rs.{round}.00</p>
              <div className={css.discount}>
                <p className={css.price}>{item.price.formatted_with_symbol}</p>
                <p>(40% OFF)</p>
              </div>

              <p className={css.finalprice}>Rs.{final} </p>
              <div className={css.buttons}>
                <button
                  className={css.delete}
                  onClick={() => {
                    handleRemoveFromCart(item.id);
                  }}
                >
                  Delete
                </button>
                <button className={css.wishlist}>Move to Wishlist</button>
              </div>
            </div>
          </Card>
        </>
  );
};

export default CartItem;
