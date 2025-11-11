import React from 'react';
import PageTitleBar from '../componentes/PageTitleBar';
import ProjectCard from '../componentes/ProjectCard'; 
import './Galeria.css'; 
import imgGaleriaPadrao from '../assets/imagemGaleria.png'; 

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
      <PageTitleBar title="Galeria de Projetos" />
      
      <main className="galeria-page">
        <div id="dv" className="container-cards">
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