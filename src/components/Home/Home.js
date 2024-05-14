import React from 'react'
import './Home.css'
import makeup_image from '../../assets/img1.png';

export const Home = () => {
  return (
    <div className='Home'>
      <div className="Home-left">
    
      <div>
        <p>latest</p>
        <p>Makeup Products</p>
        <p>for everyone</p>
      </div>
      
      </div>
    <div className="Home-right">
       <img src={makeup_image} alt="" /> 
    </div>
    </div>
  )
}
