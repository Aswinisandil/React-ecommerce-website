import React,{ useEffect} from "react";
import { Link } from "react-router-dom";

const Carousel = ({ images }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <Link to={"/products"} onClick={() => window.scrollTo(0, 0)} >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={images.img3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={images.img2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={images.img1} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </Link>
    </div>
  );
};

export default Carousel;
