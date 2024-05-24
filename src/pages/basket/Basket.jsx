import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from '../../components/header/Header'
import BasketCard from "../../components/cards/BasketCard";
import styles from './Basket.module.scss'
import Footer from '../../components/footer/Footer'

const Basket = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get("https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket")
      .then((res) => {
        setData(res.data);
      });
  };

  const deleteItem = (id) => {
    axios
      .delete(`https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket/${id}`)
      setTimeout(()=>{
        getData()
    }, 500)
  };

  useEffect(() => {
    getData();
  }, []);

  const addToWishlist= (item) => {
    axios.post(
      "https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist",
      item
    );
  };

  return (
  <div>
    <Header/>
      <div className={styles.title}>
        <h1>BASKET</h1>
      </div>
<div className={styles.pro}>
  {
    data &&data.map(item=>  <BasketCard key={item.id} item={item} sil={()=>deleteItem(item.id)} favori={()=>addToWishlist(item)}/>)
  }
</div>
  <Footer/>

  </div>
  );
};

export default Basket;
