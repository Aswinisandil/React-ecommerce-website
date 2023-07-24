import React, { useEffect } from "react";
import css from "./RegisterPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth";
import { redirect } from 'react-router'

const Loginpage = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [data, setData] = useState([]);
  const [user, setUser] = useState("");
  const [inpVal, setInpVal] = useState({
    user: "",
    password: "",
  });

  const getData = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    setUser(() => {
      return inpVal.user;
    });


    setInpVal(() => {
      return { ...inpVal, [name]: value };
    });
    console.log(inpVal);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userArray = localStorage.getItem("userDetails");
    console.log(userArray);

    const { user, Mobile, password, confirmPassword, gender } = inpVal;
    if (user === "") {
      alert("Please enter Username");
    } else {
    if (password === "") {
      alert("Please enter Password");
    } else if (userArray && userArray.length) {
      const userData = JSON.parse(userArray);
      const userlogin = userData.filter((el, k) => {
        return el.user === user && el.password === password;
      });
        console.log(userlogin);
      if(userlogin.length === 0){
        alert("Invalid Details");
        localStorage.setItem("loggedIn",false);
      }else{
        console.log("User Logged In successfully");
        navigate('/');
        auth.login(user);
        localStorage.setItem("loggedIn",true);
      }
    }
  }
  };

  useEffect(()=>{
    console.log(user);
  },[]);

  return (
    <div className={css.card}>
      <h1 className={css.header}>Welcome to AJIO</h1>
      <p>Please sign In</p>

      <form>
        <input
          className={css.name}
          type="text"
          name="user"
          placeholder="Username"
          required
          onChange={getData}
        />

        <input
          className={css.name}
          type="password"
          placeholder="password"
          name="password"
          required
          onChange={getData}
        />

        <label className={css.signin}>
          <input className={css.check} type="checkbox" id="signin" />
          By Signing In, I agree to the <a href="#">terms and Conditions</a>
        </label>
      </form>
      <button className={css.register} onClick={handleSubmit}>
        SIGN IN
      </button>
      
    </div>
  );
};

export default Loginpage;
