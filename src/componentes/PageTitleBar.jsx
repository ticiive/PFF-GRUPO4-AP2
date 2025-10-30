import React from 'react';

// 1. IMPORTE O CSS PRÓPRIO DO COMPONENTE
import './PageTitleBar.css'; 

// Este componente recebe uma 'prop' chamada 'title'
const PageTitleBar = ({ title }) => {
  return (
    <div className="hero-title-bar">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitleBar;