import React from 'react';
import Navbar from './Navbar';
import Banner from "../Assets/Banner.png"
import Banner1 from "../Assets/Banner1.jpg"
import { FiArrowRight } from "react-icons/fi"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
       <div className="home-banner-container">
        <div className="home-bannerImage-container">
        {/* {<img src={Banner1} alt="" />} */}
        </div>
      
      <div className="home-text-section">
            <h1 className="primary-heading">
                La Pineda
                </h1>
                <p className="primary-text">
                    Fundada en 1904 por la Familia Verdaguer
                </p>
                <button className="secondary-button">
                    Contactate con nosotros <FiArrowRight />
                </button>
      </div>

      <div className="home-image-container">
        <img src={Banner1} alt="" />

      </div>
      </div> 
    </div>
  )
}

export default Home
