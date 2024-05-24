import axios from 'axios'
import React, { useEffect, useState } from 'react'
import WishCard from '../../components/cards/WishCard'
import styles from './Wishlist.module.scss'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer' 

const Wishlist = () => {
const [data,setData]=useState([])

const getData=()=>{
    axios.get('https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist')
    .then(res=>{
        setData(res.data)
    })
}
useEffect(()=>{
getData()
},[])


const deleteItem=(id)=>{
    axios.delete(`https://664ae3eea300e8795d434de5.mockapi.io/basket/wishlist/${id}`)
    setTimeout(()=>{
        getData()
    },200)
}


  return (
    <div>
        <Header/>
   <div className={styles.title}>
    <h1>WISHLIST</h1>

   </div>
   <div className={styles.pro} >
    {
        data && data.map(item=> <WishCard key={item.id} item={item} sil={()=>deleteItem(item.id)}/>)
    }
   </div>

   <Footer/>
      
    </div>
  )
}

export default Wishlist
