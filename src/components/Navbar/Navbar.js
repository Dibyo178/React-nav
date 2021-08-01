import React, { useState } from "react";
import { Button } from "../Button/Button";
import MenuItems from "../MenuItem";
import './Navbar.scss';



const Navbar = () => {
   
  const[clicked,setClicked]= useState(false);

  const handleClick=() =>{
      setClicked(!clicked);
  }
  return (
    <div className="navbar-items">
      <img src="https://i.imgur.com/5uJPEGj.png"alt="Sourov" className="navbar-logo" />

      <div className="menu-icon" onClick={handleClick}>
          <i class={clicked ? "fas fa-times" :"fas fa-bars"}></i>
      </div>
        <ul class={clicked ? "nav-menu active" :"nav-menu"} >
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.url} className={item.cname}>
                 
                  {item.menu}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign up</Button>
    </div>
  );
};

export default Navbar;
