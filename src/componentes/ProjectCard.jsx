import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ projeto }) => {
  const { nomeProjeto, informacaoProjeto, imagem } = projeto;

  return (
    <div className="card">
      <div className="texto">
        <h3>{nomeProjeto}</h3>
        <p>{informacaoProjeto}</p>
      </div>
      
      {/* 1. NOVO DIV: image-wrapper */}
      <div className="image-wrapper">
        {/* 2. NOVO DIV: background-square (o quadrado azul) */}
        <div className="background-square"></div>
        {/* 3. Sua imagem original, AGORA DENTRO do wrapper */}
        <img src={imagem} alt={`Imagem do ${nomeProjeto}`} className="imagem" />
      </div>
    </div>
  );
};

export default ProjectCard;