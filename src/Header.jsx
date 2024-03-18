import React from "react";
import logo from "./Images/logo.png";
import "./styles.css";

const Header = () => {
  return (
    <>
      <div className='header'>
        <img src={logo} alt='logo' width='80' height='50'/>
        <h1>Keep</h1>

      </div>
    </>
  );
  
};

export default Header;