import React, { useState, useEffect } from 'react'; // 1. Importe useEffect
import { Link } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import './TestimonialSection.css';

// ... (O array 'testimonials' com 6 cards fica aqui, igual ao anterior) ...
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
  
  // 2. LÓGICA PARA DETECTAR O TAMANHO DA TELA
  const [slidesToShow, setSlidesToShow] = useState(1);
  const [slideWidthPercent, setSlideWidthPercent] = useState(100);
  const totalSlides = testimonials.length;

  // 3. Atualiza o layout quando a tela muda
  useEffect(() => {
    const handleResize = () => {
      // 992px é o ponto de quebra do seu CSS
      if (window.innerWidth >= 992) { 
        setSlidesToShow(2);
        setSlideWidthPercent(50); // 50% (48% do card + 2% da margem)
      } else {
        setSlidesToShow(1);
        setSlideWidthPercent(100); // 100%
      }
    };
    
    // Roda a função uma vez no início
    handleResize();
    // Adiciona o "ouvinte" de redimensionamento
    window.addEventListener('resize', handleResize);
    
    // Limpa o "ouvinte" quando o componente "morre"
    return () => window.removeEventListener('resize', handleResize);
  }, []); // O array vazio [] faz isso rodar só uma vez

  
  // 4. LÓGICA DE NAVEGAÇÃO ATUALIZADA
  const nextSlide = () => {
    // Não deixa avançar se já estiver mostrando o último slide
    const maxIndex = totalSlides - slidesToShow;
    setActiveIndex(activeIndex >= maxIndex ? 0 : activeIndex + 1);
  };

  const prevSlide = () => {
    const maxIndex = totalSlides - slidesToShow;
    // Se estiver no primeiro, volta para o último
    setActiveIndex(activeIndex === 0 ? maxIndex : activeIndex - 1);
  };

  return (
    <section className="testimonial-section">
      <div className="container">
        
        {/* --- Conteúdo da Esquerda (Texto e Botão) --- */}
        <div className="text-content">
          <h1>Elevamos o seu projeto a outro nível</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. 
            Fermentum lorem feugiat consequat morbi tincidunt dui.
          </p>
          <Link to="/form" className="cta-button">Envie seu projeto</Link>
        </div>

        {/* --- Carrossel da Direita --- */}
        <div className="carousel-wrapper">
          <div className="carousel-container">
            
            {/* 5. O NOVO TRANSFORM CORRIGIDO */}
            {/* Ele agora usa 'slideWidthPercent' (100% ou 50%) */}
            <div 
              className="carousel-track" 
              style={{ transform: `translateX(-${activeIndex * slideWidthPercent}%)` }}
            >
              {/* (O map dos cards continua igual) */}
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

          {/* --- Controles do Carrossel (funcionam igual) --- */}
          <div className="carousel-controls">
            <div className="dots-container">
              {/* Pontinhos (opcional) */}
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