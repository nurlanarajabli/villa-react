import React from 'react'
import styles from './DashCard.module.scss'

const DashCard = ({item, sil}) => {
  return (
    <div>
       <div className={styles.boxs}>
            <div className={styles.dashimg}>
              <img src={item?.thumbnail} alt="img" />
            </div>
            <div className={styles.dashbox }>
              <span>{item?.title}</span>
              <span>${item?.price}</span>
              {/* <span>{item?.description}</span> */}
             
            </div>
            <div className={styles.btn}>
              <button className={styles.btn1} onClick={sil}>Delete</button>
              <button className={styles.btn2}>Edit</button>
            </div>
          </div>
    </div>
  )
}

export default DashCard
