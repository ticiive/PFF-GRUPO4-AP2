import React, { useState } from 'react';
import './HomeGallery.css';
import imgApertoDeMao from '../assets/apertodemao.png';
import img2 from '../assets/imagem2.png';
import img3 from '../assets/imagem3.png';
const slides = [
  { id: 0, image: imgApertoDeMao, alt: 'Projeto principal' },
  { id: 1, image: img2, alt: 'Projeto secundário 1' },
  { id: 2, image: img3, alt: 'Projeto secundário 2' },
];

const HomeGallery = () => {
  const [slideAtual, setSlideAtual] = useState(0);

  const irParaSlide = (index) => {
    setSlideAtual(index);
  };

  return (
    <section className="hero-banner">
      <div className="hero-container">
        <div className="hero-slides">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`slide ${index === slideAtual ? 'active' : ''} slide-${index}`}
            >
              <img src={slide.image} alt={slide.alt} />
            </div>
          ))}
        </div>
        <div className="hero-dots">
          {slides.map((slide, index) => (
            <span
              key={slide.id}
              className={`dot ${index === slideAtual ? 'active' : ''}`}
              onClick={() => irParaSlide(index)}
            >
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HomeGallery;