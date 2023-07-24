import React, { useState, useEffect } from 'react';
import css from "./Styles.module.css"
import Badge from '@mui/material/Badge';
import { NavLink, useNavigate} from "react-router-dom";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import PropagateLoader from "react-spinners/PropagateLoader";



const NavbarCategories = ({totalItems,handleSearch}) => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const isAuthenticated = localStorage.getItem("loggedIn");
    // const [loading, setLoading] = useState(true);
     
    // useEffect(() => {
    //   setLoading(true);
    //   console.log("first",loading);
    //   setTimeout(() => {
    //     setLoading(false);
    //     console.log("second",loading);

    //   }, 1000);
    //   fetchCart();
    //   console.log("third",loading);
    //   handleLoad(loading);
    // },[]);




    const cartPage =()=>{

      (isAuthenticated)? navigate('cart'):navigate('/loginpage');
      // {loading && (
      //   <div className={css.contain}>
      //     <PropagateLoader
      //       color="#2c4152"
      //       cssOverride={{}}
      //       loading
      //       speedMultiplier={1}
      //     />
      //   </div>)
      // }
      }
    const handleInputChange = (e) =>{
      setSearchValue(e.target.value);
    }

    const handleSearchSubmit = (e) => {
      e.preventDefault();
      handleSearch(searchValue);
      navigate('/products');
      
    };


    return (
    <>
    {/* {loading ? (
        <div className={css.contain}>
          <PropagateLoader
            color="#2c4152"
            cssOverride={{}}
            loading
            speedMultiplier={1}
          />
        </div>
      ) : ( */}
    <div className={css.headerright}>
            <div className={css.menu}>
            <ul className={css.menulist}>
                <li>
                <NavLink to={'/products'} >PRODUCTS</NavLink>
                </li>
              </ul>
              <ul className={css.menulist}>
                <li>
                  <NavLink to={'/men'} >MEN</NavLink>
                </li>
              </ul>
              <ul className={css.menulist}>
                <li>
                <NavLink to={'/women'} >WOMEN</NavLink>
                </li>
              </ul>
              <ul className={css.menulist}>
                <li>
                <NavLink to={'/kids'} >KIDS</NavLink>
                </li>
              </ul>
              
              <ul className={css.menulist}>
                <li>
                <NavLink to={'/homeandkitchen'} >HOME & KITCHEN</NavLink>
                </li>
              </ul>
            </div>

            <div className={css.search}>
              <form onSubmit={handleSearchSubmit}>
                <input type="text" value={searchValue} placeholder="search AJIO " onChange={handleInputChange}/>
                <button type="submit">
                  <i className="css.bi bi-search"></i>
                </button>
              </form>
            </div>
            <div className={css.icons}>
            <div className={css.wishlist}>
            <FavoriteBorderOutlinedIcon className={css.heartIcon}/>
            </div>
          {(isAuthenticated)?
            <div className={css.cart} onClick={cartPage}>
              <Badge badgeContent={totalItems} color="primary">
              <a>
              <LocalMallOutlinedIcon className = {css.cartIcon}/>   
              </a>
              </Badge>
            </div>:
            <div className={css.cart} onClick={cartPage}>
            {/* <Badge badgeContent={totalItems} color="primary"> */}
            <a>
            <LocalMallOutlinedIcon className = {css.cartIcon}/>   
            </a>
            {/* </Badge> */}
          </div>
            
          }
            </div>
          </div>
      
          
    </>

    ); 
  }

export default NavbarCategories