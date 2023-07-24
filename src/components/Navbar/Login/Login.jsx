import React,{ useState, useEffect } from "react";
import css from "./Login.module.css";
import logo from "../../../assets/Images/fb-icon.webp";
import img from "../../../assets/Images/google-icon.webp";
import { useNavigate } from "react-router-dom";
import { validate } from 'email-validator';


function Login() {
  const [userEmail, setUseremail] = useState('');
  const [validEmail, setValidEmail] = useState([]);
  const navigate = useNavigate();
  const email = localStorage.getItem('userEmail');
  console.log(email)


  const handleInput = (e) => {
    setUseremail(e.target.value);
  };

  const addUser = () => {
    console.log(userEmail);

    if (validate(userEmail)){
      
      if(email === userEmail){
        navigate('/loginpage')
      } 
    else {
      console.log(userEmail);
      localStorage.setItem("userEmail",userEmail);
      navigate('/registerpage');
      console.log(validEmail)
    }
    
  }else{
    alert("Please enter a valid email address")
  }};

  return (
    <div className={css.card}>
      <h1 className={css.header}>Welcome to AJIO</h1>
      <p>Join/Sign In using</p>
      <div className={css.icons}>
        <div className={css.facebook}>
          <img src={logo} alt="facebook" />
          <p>FACEBOOK</p>
        </div>
        <div className={css.google}>
          <img src={img} alt="google" />
          <p>GOOGLE</p>
        </div>
      </div>

      <form>
        <label className={css.label}>Enter Email
        </label>
        <input
          className={css.input}
          type="text"
          value={userEmail}
          onChange={handleInput}
        />      
      </form>
      <button className={css.continue} onClick={addUser}>
        CONTINUE
      </button>
      <p className={css.lastline}>
        By Signing In, I agree to the <a href="">Terms and Conditions</a>
      </p>
    </div>
  );
}

export default Login;
