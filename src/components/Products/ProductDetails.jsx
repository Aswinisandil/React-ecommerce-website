import React, { useEffect, useState } from "react";
import { commerce } from "../../lib/commerce";
import { useParams } from "react-router-dom";
import css from "./ProductDetails.module.css";
import PropagateLoader from "react-spinners/PropagateLoader";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const ProductDetails = ({ onAddToCart, fetchCart, cart }) => {
  const [product, setProduct] = useState(null);
  const [selectedsize, setSelectedsize] = useState("");
  const { productId } = useParams();
  const [loading, setLoading] = useState(true);
  const options = {
    color: product && product.variant_groups[1].options[0].name,
  };
  const [colour, setColour] = useState("#2c4152");

  const override = {
    display: "block",
    margin: "200px",
    borderColor: "red",
  };

  const variant = {
    width: "30px",
    height: "30px",
    backgroundColor: options.color,
    borderRadius: "50%",
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    const fetchProduct = async () => {
      try {
        setProduct(await commerce.products.retrieve(productId));
      } catch (error) {
        console.log("Error retreiving the product", error);
      }
    };
    // console.log(cart)
    // console.log(product);
    // console.log(selectedsize);
    fetchProduct();
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  if (!product) {
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
  const productGroup = product.variant_groups[0];

  const handleSelect = (size, productId) => {
    return setSelectedsize(size);
  };

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
        <>
          <div className={css.container}>
            <div className={css.image}>
              <img src={product.image.url} alt="" />
              {product.categories[1].slug === "women-western-wear" ? (
                <p>
                  <i>Our model wearing a size small</i>
                </p>
              ) : null}
            </div>
            <div className={css.side}>
              <h6
                className={css.title}
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></h6>
              <p className={css.descript}>{product.name}</p>
              <p className={css.rate}>
                MRP:{product.price.formatted_with_symbol}
              </p>
              <p className={css.price}>Price inclusive of all taxes</p>
              <p className={css.color}>
                Select {product.variant_groups[1].name}
              </p>

              <p className={css.color}>
                {product.variant_groups[1].options[0].name}
              </p>

              <button style={variant} className={variant}></button>
              <p className={css.select}>
                Select {product.variant_groups[0].name}
              </p>

              <div className={css.sizes}>
                {productGroup.options.map((option) => (
                  <button
                    key={option.id}
                    className={css.buttonstyle}
                    style={
                      selectedsize === option.name
                        ? { backgroundColor: "#2c4152", color: "white" }
                        : null
                    }
                    onClick={() => {
                      handleSelect(option.name, productId);
                      setSelectedsize(option.name);
                    }}
                  >
                    {option.name}
                  </button>
                ))}
              </div>

              <button
                className={css.cartbutton}
                onClick={() => {
                  onAddToCart(product.id, 1);
                }}
              >
                <ShoppingBagOutlinedIcon />
                ADD TO BAG
              </button>
              <p className={css.handpicked}>
                HANDPICKED STYLES AND | ASSURED QUALITY
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
