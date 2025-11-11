import React, { useState } from 'react';
import './DisciplineCarousel.css';
const disciplines = [
  { id: "pffe", title: "Projeto front-end", text: "lorem ipsumLorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui. Justo nibh tortor dignissim diam tincidunt blandit vulputate urna nulla. Id nunc aliquam morbi iaculis diam." },
  { id: "pfbe", title: "Projeto back-end", text: "Lorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui. Justo nibh tortor dignissim diam tincidunt blandit vulputate urna nulla. Id nunc aliquam morbi iaculis diam." },
  { id: "pbi", title: "Projeto BI", text: "Lorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui. Justo nibh tortor dignissim diam tincidunt blandit vulputate urna nulla. Id nunc aliquam morbi iaculis diam." }
];

const DisciplineCarousel = () => {
  const [indiceAtual, setIndiceAtual] = useState(0);

  const irParaDireita = () => {
    let proximoIndice = indiceAtual + 1;
    if (proximoIndice >= disciplines.length) proximoIndice = 0;
    setIndiceAtual(proximoIndice);
  };

  const irParaEsquerda = () => {
    let indiceAnterior = indiceAtual - 1;
    if (indiceAnterior < 0) indiceAnterior = disciplines.length - 1;
    setIndiceAtual(indiceAnterior);
  };

  // 2. ADICIONE ESTA FUNÇÃO para os pontinhos
  const irParaSlide = (index) => {
    setIndiceAtual(index);
  };

  return (
    <section className="disextenc">
      <h2>Nossas disciplinas extensionistas</h2>
      
      <div className="carrossel-container">
        <div className="botao-carrossel esquerda" onClick={irParaEsquerda}></div>
        <div className="card-wrapper">
          {disciplines.map((disc, index) => (
            <div 
              key={disc.id}
              id={disc.id}
              className={index === indiceAtual ? 'principal borda ativo' : 'principal borda'}
            >
              <div className="titulo">
                <h3>{disc.title}</h3>
              </div>
              <div className="txt">
                <p>{disc.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="botao-carrossel direita" onClick={irParaDireita}></div>
      </div>
      <div className="carousel-dots">
        {disciplines.map((slide, index) => (
          <span
            key={slide.id}
            className={`dot ${index === indiceAtual ? 'active' : ''}`}
            onClick={() => irParaSlide(index)}
          >
          </span>
        ))}
      </div>

    </section>
  );
};
export default DisciplineCarousel;