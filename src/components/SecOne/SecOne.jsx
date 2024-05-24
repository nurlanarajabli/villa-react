import React from "react";
import styles from "./SecOne.module.scss";

const SecOne = () => {
  return (
    <div>
      <div className={styles.sec}>
        <div  className={styles.overlay}>
 <div className={styles.contOne}>
          <div className={styles.text}>
            <h1>Welcome to Villa resort</h1>
            <p>Discover our world-class hotel & restaurant resort.</p>
            <div className={styles.btn}>
              <button className={styles.btnOne}>EXPLORE THE BEAUTY</button>
              <button className={styles.btnTwo}>DOWNLOAD</button>
            </div>
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default SecOne;
