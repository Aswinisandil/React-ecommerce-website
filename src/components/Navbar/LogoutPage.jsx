import React from "react";
import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";

const LogoutPage = () => {
    const auth = useAuth();
    const navigate = useNavigate();
    const isAuthenticated = localStorage.getItem("loggedIn");
    const userData = localStorage.getItem("userDetails");
    const userobj = JSON.parse(userData);
   
    const handleLogout = () => {
        auth.logOut();
        navigate("/");
        localStorage.removeItem("loggedIn");
      };
  return (
    <div style={{
      display: "flex",
      width: "100%",
      justifyContent: "center",
      alignItems:"center",
      height: "auto",
      marginTop: "100px",
      flexDirection:"column",
      gap:"100px"

    }}>
        <h3>LogoutPage</h3>
        {isAuthenticated ? <button onClick={handleLogout} >Logout</button> : null}


    </div>
  )
}

export default LogoutPage