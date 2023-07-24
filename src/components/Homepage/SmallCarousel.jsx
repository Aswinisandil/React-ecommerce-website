import React,{ useEffect} from "react";
import { Link } from "react-router-dom";
import "./Small.css";

const SmallCarousel = ({ images }) => {

   
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="small">
      <Link to={'/products'} onClick={() => window.scrollTo(0, 0)}>
        <img className="smallimg" src={images.img1} alt="" />
        <img className="smallimg" src={images.img2} alt="" />
        <img className="smallimg"  src={images.img3} alt="" />
        <img className="smallimg" src={images.img4} alt="" />
      </Link>
    </div>
  );
};

export default SmallCarousel;
