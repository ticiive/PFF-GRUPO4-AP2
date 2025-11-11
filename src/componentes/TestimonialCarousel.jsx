import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import './TestimonialSection.css';
const testimonials = [
  { id: 1, text: "lorem ipsumLorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui.", company: "Empresa Alpha", author: "João Silva, CEO", logoChar: "A" },
  { id: 2, text: "lorem ipsumLorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui.", company: "Tech Solutions", author: "Maria Garcia, Diretora", logoChar: "T" },
  { id: 3, text: "lorem ipsumLorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui.", company: "Inovatec", author: "Carlos Pereira, Gerente", logoChar: "I" },
  { id: 4, text: "lorem ipsumLorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui.", company: "Nexus Digital", author: "Ana Beatriz, Dev Lead", logoChar: "N" },
  { id: 5, text: "lorem ipsumLorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui.", company: "FutureWorks", author: "Lucas Mendes, Fundador", logoChar: "F" },
  { id: 6, text: "lorem ipsumLorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui.", company: "Agile Systems", author: "Beatriz Costa, PO", logoChar: "A" }
];


const TestimonialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slideWidthPercent, setSlideWidthPercent] = useState(100);
  const totalSlides = testimonials.length;
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) { 
        setSlidesToShow(2);
        setSlideWidthPercent(50); 
      } else {
        setSlidesToShow(1);
        setSlideWidthPercent(100);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  const nextSlide = () => {
    const maxIndex = totalSlides - slidesToShow;
    setActiveIndex(activeIndex >= maxIndex ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    const maxIndex = totalSlides - slidesToShow;
    setActiveIndex(activeIndex === 0 ? maxIndex : activeIndex - 1);
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="text-content">
          <h1>Elevamos o seu projeto a outro nível</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. 
            Fermentum lorem feugiat consequat morbi tincidunt dui.
          </p>
          <Link to="/form" className="cta-button">Envie seu projeto</Link>
        </div>
        <div className="carousel-wrapper">
          <div className="carousel-container">
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${activeIndex * slideWidthPercent}%)` }}
            >
              {testimonials.map(card => (
                <div className="testimonial-card" key={card.id}>
                  <div className="card-content">
                    <div className="rating">
                      <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    </div>
                    <p className="testimonial-text">{card.text}</p>
                  </div>
                  <footer>
                    <div className="author-logo">{card.logoChar}</div>
                    <div className="author-info">
                      <p className="company-name">{card.company}</p>
                      <p className="author-details">{card.author}</p>
                    </div>
                  </footer>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <div className="dots-container">
            </div>
            <div className="arrows-container">
              <button id="prevBtn" className="arrow" onClick={prevSlide}>
                <FaArrowLeft />
              </button>
              <button id="nextBtn" className="arrow" onClick={nextSlide}>
                <FaArrowRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;