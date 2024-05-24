import React, { useState } from "react";
import sytyles from "./Header.module.scss";
import { FaBars } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import axios from "axios";
import ProductCard from '../cards/ProductCard'

const Header = () => {

const navigation=useNavigate('')

  return (
    <div>
      <div className={sytyles.hdr}>
        <div className={sytyles.cont}>
          <div className={sytyles.logo}>
            <h6>Villa</h6>
          </div>
         
        
          <div className={sytyles.baswishdash}>
          <FaHome  onClick={()=>navigation('/')} style={{color:'white',fontSize:25}} />
            <FaShoppingCart onClick={()=>navigation('/basket')} style={{color:'white',fontSize:25}}/>
            <MdFavorite  onClick={()=>navigation('/wishlist')} style={{color:'white',fontSize:25}}/>
            <MdDashboard   onClick={()=>navigation('/dashboard')} style={{color:'white',fontSize:25}}/>
          </div>
          <div className={sytyles.menu}>
            <FaBars  style={{color:'white',fontSize:25}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
