import React from "react";
import { useAuth } from "../auth";
import { useNavigate, Link, Outlet } from "react-router-dom";
import css from "./Profile.module.css";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem("loggedIn");
  const userData = localStorage.getItem("userDetails");
  const userobj = JSON.parse(userData);

  console.log(userobj[0].user);

  const handleLogout = () => {
    auth.logOut();
    navigate("/");
    localStorage.removeItem("loggedIn");
  };

  return (
    <div>
      <div className={css.container}>
        <div className={css.form}>
          {isAuthenticated ? (
            <h4 className={css.welcome}>Welcome {userobj[0].user}</h4>
          ) : (
            <h4 className={css.welcome}>Welcome User</h4>
          )}
          <Link to="" className={css.link}>
            Profile
          </Link>
          <Link to="orderhistory" className={css.link}>
            Order History
          </Link>
          <Link to="wishlist" className={css.link}>
            Wishlist
          </Link>

          {isAuthenticated ? (
            <button onClick={handleLogout} className={css.button}>
              Logout
            </button>
          ) : null}
        </div>
        <div className={css.outlet}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;
