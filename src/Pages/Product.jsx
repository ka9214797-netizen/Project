import React from 'react'
import axios from 'axios'
import {useEffect, useState} from "react"
import ProductCard from '../Components/ProductCard'





export const Product = () => {
  const [products , setProducts] = useState([])


const getData = async() => {
const {data:{products}} = await axios.get("https://dummyjson.com/products").then(res=>res)
console.log(products)
setProducts([...products])
}
useEffect(()=>{
getData()

},[])



  return (
    <>  
      <div className='d-flex flex-wrap gap-5 justify-content-center'>
 { products.map(({id,title,price,thumbnail})=>{
    return  <ProductCard title={title} id={id} price={price} thumbnail = {thumbnail} />
}) }



    </div>

    </>

  )
}
export default Product