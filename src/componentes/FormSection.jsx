import React from 'react';

// 1. Importe o CSS próprio deste componente
import './FormSection.css'; 

/**
 * Este componente recebe 4 props:
 * - image: A imagem a ser exibida
 * - imageAlt: O texto alt da imagem
 * - reverse: Um booleano (true/false) para inverter a ordem (texto-imagem)
 * - children: O conteúdo do formulário (os campos)
 */
const FormSection = ({ image, imageAlt, reverse = false, children }) => {
  
  // Define as classes CSS com base na prop 'reverse'
  const bandClass = reverse ? 'band band--second' : 'band';
  const rowClass = reverse ? 'band__row band__row--2' : 'band__row band__row--1';
  const panelClass = reverse ? 'panel panel--left' : 'panel panel--right';

  const ImageFigure = () => (
    <figure className="band__photo">
      <img src={image} alt={imageAlt} />
    </figure>
  );

  const PanelContent = () => (
    <div className={panelClass}>
      {children} {/* Aqui entram seus campos <label>, <input>, etc. */}
    </div>
  );

  return (
    <section className={bandClass}>
      <div className="band__strip"></div>
      <div className={`wrap ${rowClass}`}>
        
        {/* Renderiza em ordem normal ou invertida */}
        {reverse ? (
          <>
            <PanelContent />
            <ImageFigure />
          </>
        ) : (
          <>
            <ImageFigure />
            <PanelContent />
          </>
        )}
        
      </div>
      <div className="band__strip band__strip--bottom"></div>
    </section>
  );
};

export default FormSection;