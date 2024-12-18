import React from 'react';
import producto1 from "../Assets/producto1.jpg";
import producto2 from "../Assets/producto2.jpg";
import producto3 from "../Assets/producto3.jpg";
import producto4 from "../Assets/producto4.jpg";
import producto5 from "../Assets/producto5.jpg";
import producto6 from "../Assets/producto6.jpg";
import producto7 from "../Assets/producto7.jpg";

const Productos = () => {
  return (
    
    <div className="fotos-container">
        <div className="home-text-section">
            <h1 className="primary-subheading-productos">
                Productos
            </h1>
        </div>   

    <div className="fotos">
        <img src={producto1} alt="" />
        <img src={producto2} alt="" />
        <img src={producto3} alt="" />

        <img src={producto4} alt="" />
        <img src={producto5} alt="" />
        <img src={producto6} alt="" />
      </div>
    </div>
  )
}

export default Productos
