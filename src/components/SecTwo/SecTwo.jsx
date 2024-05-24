import React from "react";
import styles from "./SecTwo.module.scss";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const SecTwo = () => {
  return (
    <div>
      <div className={styles.sectwo}>
        <div className={styles.contTwo}>
          <div className={styles.textTwo}>
            <p>YOU CAN VISIT</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.box}>
              <div className={styles.imgbox}>
                <img
                  src="https://preview.colorlib.com/theme/villa/img/img_1.jpg"
                  alt=""
                />{" "}
              </div>
              <div className={styles.textbox}>
                <p>Food & Wines</p>

                <div className={styles.sp}>
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStarHalf style={{ color: "#E61C5D" }} />
                  <IoMdStarOutline
                    style={{ color: "#E61C5D", marginRight: 30 }}
                  />
                  <span>3,239 reviews</span>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.imgbox}>
                <img
                  src="https://preview.colorlib.com/theme/villa/img/img_2.jpg"
                  alt=""
                />{" "}
              </div>
              <div className={styles.textbox}>
                <p>Resort & Spa</p>

                <div className={styles.sp}>
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStarHalf style={{ color: "#E61C5D" }} />
                  <IoMdStarOutline
                    style={{ color: "#E61C5D", marginRight: 30 }}
                  />
                  <span>4,921 reviews</span>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.imgbox}>
                <img
                  src="https://preview.colorlib.com/theme/villa/img/img_4.jpg"
                  alt=""
                />
              </div>
              <div className={styles.textbox}>
                <p>Hotel Rooms</p>

                <div className={styles.sp}>
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStarHalf style={{ color: "#E61C5D" }} />
                  <IoMdStarOutline
                    style={{ color: "#E61C5D", marginRight: 30 }}
                  />
                  <span>2,112 reviews</span>
                </div>
              </div>
            </div>

            <div className={styles.box}>
              <div className={styles.imgbox}>
                <img
                  src="https://preview.colorlib.com/theme/villa/img/img_5.jpg"
                  alt=""
                />{" "}
              </div>
              <div className={styles.textbox}>
                <p>Yacht Club</p>

                <div className={styles.sp}>
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStar style={{ color: "#E61C5D" }} />
                  <IoMdStarHalf style={{ color: "#E61C5D" }} />
                  <IoMdStarOutline
                    style={{ color: "#E61C5D", marginRight: 30 }}
                  />
                  <span>6,421 reviews</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecTwo;
