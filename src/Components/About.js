import React from 'react';
import pinedaback from "../Assets/pinedaback.jpg";
import jamones from "../Assets/jamones.jpg";

const About = () => {
  return (
    <div className="about-section-container">
        <div className="about-background-image-container">
            <img src={jamones} alt="" />
        </div>
        <div className="about-section-image-container">
            {/* <img src="" alt="" /> */}
        </div>

        <div className="home-text-sextion">
            <p className="primary-subheading-about">Sobre Nosotros</p>
            <p className="primary-text-about">La xarcuteria La Pineda, es un lugar de degustación gourmet, todo el producto que existe en ella es de primerísima calidad, todo cortado y manipulado al momento.
            </p>
            <p className="primary-text-about">Fue fundada como referente  del sector alimentario de la ciudad. En el año 1930 el sr. Florencio Mir adquiere el negocio que actualmente continúa en manos de la familia, y conserva gran parte de la decoración original.
            </p>
            <div className="about-buttons-container">
                <button className="secondary-button">Ver productos</button>
            </div>
        </div>

    </div>
  )
}

export default About
