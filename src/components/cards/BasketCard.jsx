import React from 'react'
import styles from './ProductCard.module.scss'



const BasketCard = ({ item, sil,favori }) => {
  return (
    <>
     
       
          <div className={styles.boxs}>
            <div className={styles.imggg}>
              <img src={item?.thumbnail} alt="img" />
            </div>
            <div className={styles.texttt}>
              <p>{item?.title}</p>
              <p> ${item?.price}</p>
              <span>{item?.description}</span>
             
            </div>
            <div className={styles.btnn}>
              <button className={styles.btn1} onClick={sil}>Delete</button>
              <button className={styles.btn2} onClick={favori}>Add To Favori</button>

            </div>
          </div>
      

      </>


   
  )
}

export default BasketCard
