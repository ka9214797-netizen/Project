import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import image from '../assets/immage.jpg'





export const image = () => {
  return (
    <div>
      <img src={image} alt="logo" style={{height:"100px", width: "100px"}} />    
    </div>
  )
}
