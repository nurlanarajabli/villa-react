import React from 'react'
import styles from './Footer.module.scss'
import { CiHeart } from "react-icons/ci";
import { LiaTripadvisor } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className={styles.footer}>
        <div  className={styles.contfoo} >
          <div className={styles.textfoo}>
            <span>Copyright ©2024 All rights reserved | This template is made with <CiHeart /> <span> by Colorlib</span></span>

          </div> 
          <div  className={styles.icnfoo}>
          <LiaTripadvisor style={{color:'white',fontSize:20}} />
          <FaFacebookF style={{color:'white',fontSize:20}} />
          <FaTwitter style={{color:'white',fontSize:20}} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
