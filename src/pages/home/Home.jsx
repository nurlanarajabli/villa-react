import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SecOne from "../../components/SecOne/SecOne";
import SecTwo from "../../components/SecTwo/SecTwo";
import SecThree from "../../components/SecThree/SecThree";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/cards/ProductCard";
import styles from "./Home.module.scss";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://dummyjson.com/products')
    .then( res => {
      setData(res.data.products)
    })
  }


  const addToBasket = (item) => {
    axios.get("https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket")
    .then((res) => {
     const db= res.data
const existingFile= db.find(x=>x.id == item.id)
if (existingFile){
  axios.put(`https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket/${existingFile.id}`,{...existingFile, count:existingFile.count +1})

}
else{
  axios.post('https://664c4fc135bbda10987fd0ce.mockapi.io/basket/basket',item ,{...item, count:1})
}
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const addToWishlist = (item) => {
  axios.get('https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist')
  .then(res=>{
  const db=res.data
  const existingFile=db.find(x=>x.id==item.id)
  if(existingFile){
    alert('Mehsul Add To Wishlistde vardir')

  }
  else{
    axios.post('https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist',item)
  }
})
  };





  return (
    <div>
      <Header />
      <SecOne />
      <SecTwo />
      <SecThree />
      <div className={styles.title}>
        <h1>Recent Blog Post</h1>
        <p>
     
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In dolor,
          iusto doloremque quo odio repudiandae sunt eveniet? Enim facilis
          laborum voluptate id porro, culpa maiores quis, blanditiis laboriosam
          alias. Sed.
        </p>
      </div>

      <div className={styles.pro}>
        {data && data.map((item) => <ProductCard key={item.id} item={item} add={()=>addToBasket(item)} favori={()=>addToWishlist(item)} />)}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
