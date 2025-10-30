import React from 'react';

// 1. Importe o CSS próprio deste componente
import './SectionItem.css'; 

/**
 * Este componente recebe duas props:
 * - title: O título da seção (ex: "Nossa Missão")
 * - text: O parágrafo de texto
 */
const SectionItem = ({ title, text }) => {
  return (
    <section className="section-item">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
};

export default SectionItem;