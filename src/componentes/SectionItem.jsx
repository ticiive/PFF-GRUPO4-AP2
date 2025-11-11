import React from 'react';
import './SectionItem.css'; 
const SectionItem = ({ title, text }) => {
  return (
    <section className="section-item">
      <h2>{title}</h2>
      <p>{text}</p>
    </section>
  );
};

export default SectionItem;