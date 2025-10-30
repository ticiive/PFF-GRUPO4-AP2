import React from 'react';

// 1. Importe os componentes da sua Home
import HomeGallery from '../componentes/HomeGallery'; 
import DisciplineCarousel from '../componentes/DisciplineCarousel'; // <-- IMPORTA O NOVO
import TestimonialCarousel from '../componentes/TestimonialCarousel';

const Home = () => {
  return (
    <>
      <HomeGallery /> 
      
      {/* 2. Use o novo componente aqui */}
      <DisciplineCarousel /> 
      
      <TestimonialCarousel />
    </>
  );
};

export default Home;