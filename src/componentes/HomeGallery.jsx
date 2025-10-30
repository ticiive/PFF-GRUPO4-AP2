import React, { useState } from 'react';

// 1. Importe o CSS próprio deste componente
import './HomeGallery.css';

// 2. Importe as imagens
import imgApertoDeMao from '../assets/apertodemao.png';
import img2 from '../assets/imagem2.png';
import img3 from '../assets/imagem3.png';

// 3. Coloque os dados em um array para facilitar
const slides = [
  { id: 0, image: imgApertoDeMao, alt: 'Projeto principal' },
  { id: 1, image: img2, alt: 'Projeto secundário 1' },
  { id: 2, image: img3, alt: 'Projeto secundário 2' },
];

const HomeGallery = () => {
  // 4. Estado para controlar o slide ativo
  const [slideAtual, setSlideAtual] = useState(0);

  const irParaSlide = (index) => {
    setSlideAtual(index);
  };

  return (
    <section className="hero-banner">
      
      {/* Container para o carrossel (mobile) e grid (desktop) */}
      <div className="hero-container">

        {/* 1. SLIDES (IMAGENS) */}
        {/* No mobile, usamos CSS para mostrar/esconder */}
        {/* No desktop, usamos o grid */}
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

        {/* 2. PONTINHOS (SÓ MOBILE) */}
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