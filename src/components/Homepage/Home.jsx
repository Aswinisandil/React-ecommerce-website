import React, { useState, useEffect } from 'react';
import "./Home.css";
import Carousel from './Carousel';
import {images,secondBanImgs,brandImgs,car3,car4, car5 } from './Resources/carouselImages'
import SmallCarousel from './SmallCarousel';
import {sc1,sc2,sc3,sc4} from './Resources/SmallCarouselImages';




function Home({cart}){

  const isAuthenticated = localStorage.getItem("loggedIn");
  const [loading, setLoading] = useState(true);
  const [colour, setColour] = useState("#2c4152");

 

  useEffect(() => {
    !cart? setLoading(false):setLoading(true)
    setTimeout(() => {
      setLoading(false);
      console.log("second",loading);

    }, 3000);
  },[]);




  return (
    <>
   <div>
      <Carousel images = {images} />
      <Carousel images = {secondBanImgs}/>
      
      {/* <!--mainbanner-3--> */}
      <div className='mainbanner3'>
        <img className='bannerimg' src="https://assets.ajio.com/cms/AJIO/WEB/02062023-UHP-BBS-D-Sponsorbrands-Sectionheader.jpg" alt="" />
      </div>
     
      <Carousel images = {brandImgs}/>
     
      {/* <!--mainbanner-4--> */}
      <div className='mainbanner4'>
        <img className='bannerimg' src="https://assets.ajio.com/cms/AJIO/WEB/05052023-UHP-Summerstealontopbrands-D-Sectionheader.jpg" alt="" />
      </div>
      
      {/* <!--Carousel-3--> */}
      <Carousel images ={car3}/>      
      
      {/* <!--mainbanner-5--> */}
      <div className='mainbanner5'>
        <img className='bannerimg' src="https://assets.ajio.com/cms/AJIO/WEB/01062023-UHP-Sponsorbrands-D-Sectionheader.jpg" alt="" />
      </div>

    <SmallCarousel images={sc1}/>
    <div className='mainbanner6'>
        <img className='bannerimg' src="https://assets.ajio.com/cms/AJIO/WEB/02062023-UHP-BBS-D-Todaysfashionbulleting-Sectionheader.jpg" alt="" />
      </div>

    <Carousel images={car4}/>
    <div className='mainbanner7'>
        <img className='bannerimg' src="https://assets.ajio.com/cms/AJIO/WEB/01062023-UHP-Newonthebestsellers-D-Sectionheader.jpg" alt="" />
      </div>

    <Carousel images={car5}/>


      <div className='lbannerlast1'>
        <img
          className='bannerimg'
          src="https://assets.ajio.com/cms/AJIO/WEB/01062023-UHP-Theajiobrandverse-D-Sectionheader.jpg"
          alt=""
        />
      </div>
      <SmallCarousel images={sc2}/>
      <SmallCarousel images={sc3}/>
      <SmallCarousel images={sc4}/>




      <div className= 'lbannerlast1'>
        <img
          className='bannerimg'
          src="./img/mainBanners/lbannerlast-1.avif"
          alt=""
        />
      </div>
      

      {/* <!--Images-Slabs-start--> */}

      <div className="imageSlab-1" id="i-1"></div>

      <div className="imageSlab-2" id="i-2"></div>

      <div className="imageSlab-3" id="i-3"></div>

      <div className="imageSlab-4" id="i-4"></div>

      <div className="imageSlab-5" id="i-5"></div>

      {/* <!--Images-Slabs-end--> */}

      <div className='lastbigimage'>
        <img
          className='bannerimg'
          src="https://assets.ajio.com/cms/AJIO/WEB/Discover%20Online%20Stores%20(D)1111.jpg"
          alt=""
        />
      </div>
      <div className='lastBanner'>
        <img
          className='bannerimg'
          src="https://assets.ajio.com/cms/AJIO/WEB/08032022-D-unisex-ajiocares-strip%20new%20d.jpg"
          alt=""
        />
      </div>  
      </div>

</>
  )
}

export default Home;