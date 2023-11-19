import React, { useState } from "react";
import "./Header.css";
import logo from "./logo.png";
import ordersIcon from "./checkout.png";
import loginIcon from "./avatar.png";
import { useNavigate } from "react-router-dom";

const Header = ({history}) => {
  const navigate = useNavigate();

  const [keyword,setKeyword] = useState("");

  const searchSubmitHandler =(e)=>{
    e.preventDefault();
    navigate(keyword.trim() ? `/products/${keyword}` : "/products");
  }
  return (
    <header className="nav">
      {/* Logo section */}
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      {/* Search bar section */}
      <form onSubmit={searchSubmitHandler}>
        <div className="search-bar">
          <input type="text" placeholder="Search..." onChange={(e)=> setKeyword(e.target.value)}/>
          <button type="button">Search</button>
        </div>
      </form>

      {/* Login and Orders section */}
      <div className="user-actions">
        <div className="user-action">
          <img src={ordersIcon} alt="Orders" />
          <span>Orders</span>
        </div>
        <div className="user-action">
          <img src={loginIcon} alt="Login" />
          <span>Login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
