import React from "react";
import css from "./Styles.module.css"
import Logo from '../../assets/Images/Ajio-Logo.svg';
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../auth";
import NavbarCategories from "./NavbarCategories";

const Navbar = ({totalItems, products, handleSearch,fetchCart}) => {
  const auth = useAuth();
  const isAuthenticated = localStorage.getItem("loggedIn");
  const userData = localStorage.getItem("userDetails");
  const userobj = JSON.parse(userData);
  const navigate = useNavigate();

  const iscartPage = window.location.pathname==='/cart';

  // console.log(userobj?.[0]?.user);
  
  const goHome = () => {
    // console.log("Home")
     navigate('/')
  }

  return (
      <nav className={css.navbar}>
        <img className={css.logo} src= {Logo} onClick={goHome}  alt="Ajio" />



        {
            iscartPage? <div className={css.space}></div>:null
        }
        <div className={css.rightmenu}>

          <div className={css.guestheader}>
            <ul>
              <li>
                {
                  (!isAuthenticated)? <NavLink to={'/login'}>Sign In / Join AJIO</NavLink> : <NavLink to={'/profile'}> Hello,{userobj[0].user}</NavLink>
                }
                
              </li>
              <li>
                <NavLink to={'/customercare'}>Customer Care</NavLink>
              </li>
              <li className={css.visitajio}>
                <a href="">Visit AJIOLUXE</a>
              </li>
            </ul>
          </div>

         {!iscartPage && <NavbarCategories totalItems={totalItems} products={products} handleSearch={handleSearch} fetchCart={fetchCart}/>}
          
        </div>
                  
      </nav>

  );
};

export default Navbar;
