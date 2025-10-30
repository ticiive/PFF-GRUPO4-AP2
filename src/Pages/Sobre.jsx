import React from 'react';

// 1. Importe os componentes
import PageTitleBar from '../componentes/PageTitleBar';
import SectionItem from '../componentes/Sectionitem';

// 2. Importe o CSS da página
import './Sobre.css'; 

// 3. Importe a imagem (coloque ela na pasta /src/assets)
import teamImage from '../assets/image 3.png'; 

// 4. Dados para os componentes (do seu HTML original)
const sections = [
  { 
    title: "Por que escolher a ibmec?", 
    text: "Lorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui. Justo nibh tortor dignissim diam tincidunt blandit vulputate urna nulla. Id nunc aliquam morbi iaculis diam." 
  },
  { 
    title: "Nossa Missão", 
    text: "Lorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui. Justo nibh tortor dignissim diam tincidunt blandit vulputate urna nulla. Id nunc aliquam morbi iaculis diam." 
  },
  { 
    title: "Nossa Visão", 
    text: "Lorem ipsum dolor sit amet consectetur. Ultricies malesuada nulla eu dui laoreet at laoreet. Fermentum lorem feugiat consequat morbi tincidunt dui. Justo nibh tortor dignissim diam tincidunt blandit vulputate urna nulla. Id nunc aliquam morbi iaculis diam." 
  }
];

const Sobre = () => {
  return (
    <>
      {/* Componente 1: A barra de título azul */}
      <PageTitleBar title="Sobre nós" />
      
      <main className="content-section">
        
        {/* Coluna da Esquerda: O texto */}
        <div className="text-container">
          {/* 5. Mapeia os dados e cria 3 componentes SectionItem */}
          {sections.map(section => (
            <SectionItem 
              key={section.title} 
              title={section.title} 
              text={section.text} 
            />
          ))}
        </div>

        {/* Coluna da Direita: A imagem */}
        <div className="image-container">
          <img src={teamImage} alt="Equipe ibmec trabalhando" className="team-image" />
        </div>
      </main>
    </>
  );
};

export default Sobre;