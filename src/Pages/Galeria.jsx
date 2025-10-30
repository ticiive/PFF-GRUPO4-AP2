import React from 'react';

// 1. Importe os componentes da página
import PageTitleBar from '../componentes/PageTitleBar';
import ProjectCard from '../componentes/ProjectCard'; // O novo componente

// 2. Importe o CSS da página
import './Galeria.css'; 

// 3. Importe sua imagem (coloque-a em /src/assets)
// (Seu JS usa "./Mídia/imagemGaleria.png", então eu assumi que é esta)
import imgGaleriaPadrao from '../assets/imagemGaleria.png'; 

// 4. Mova o array 'projetos' do seu galeria.js para cá
const projetos = [
  {
    nomeProjeto: "Projeto sem nome",
    informacaoProjeto: "O projeto consiste...",
    imagem: imgGaleriaPadrao 
  },
  {
    nomeProjeto: "App de Estudos",
    informacaoProjeto: "O projeto consiste...",
    imagem: imgGaleriaPadrao
  },
  {
    nomeProjeto: "Site de Receitas",
    informacaoProjeto: "O projeto consiste...",
    imagem: imgGaleriaPadrao
  },
  {
    nomeProjeto: "Plataforma de E-commerce",
    informacaoProjeto: "O projeto consiste...",
    imagem: imgGaleriaPadrao
  },
  {
    nomeProjeto: "Sistema de Gerenciamento",
    informacaoProjeto: "O projeto consiste...",
    imagem: imgGaleriaPadrao
  },
  {
    nomeProjeto: "Aplicativo de Análises",
    informacaoProjeto: "O projeto consiste...",
    imagem: imgGaleriaPadrao
  }
];

const Galeria = () => {
  return (
    <>
      {/* Componente 1: A barra de título azul */}
      <PageTitleBar title="Galeria de Projetos" />
      
      <main className="galeria-page">
        <div id="dv" className="container-cards">
          
          {/* 5. A MÁGICA DO REACT:
              Mapeia o array 'projetos' e renderiza 
              um componente ProjectCard para cada item.
          */}
          {projetos.map((projeto, index) => (
            <ProjectCard 
              key={index} 
              projeto={projeto} 
            />
          ))}

        </div>
      </main>
    </>
  );
};

export default Galeria;