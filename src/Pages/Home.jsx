import React from 'react';
import HomeGallery from '../componentes/HomeGallery'; 
import DisciplineCarousel from '../componentes/DisciplineCarousel'; 
import TestimonialCarousel from '../componentes/TestimonialCarousel';

const Home = () => {
  return (
    <>
      <HomeGallery /> 
      <DisciplineCarousel /> 
      
      <TestimonialCarousel />
    </>
  );
};

export default Home;