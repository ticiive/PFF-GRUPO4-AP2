import React from 'react';
import './FormSection.css'; 

const FormSection = ({ image, imageAlt, reverse = false, children }) => {
  
  const bandClass = reverse ? 'band band--second' : 'band';
  const rowClass = reverse ? 'band__row band__row--2' : 'band__row band__row--1';
  const panelClass = reverse ? 'panel panel--left' : 'panel panel--right';

  return (
    <section className={bandClass}>
      <div className="band__strip"></div>
      <div className={`wrap ${rowClass}`}>
        
        {reverse ? (
          <>
            <div className={panelClass}>
              {children}
            </div>
            <figure className="band__photo">
              <img src={image} alt={imageAlt} />
            </figure>
          </>
        ) : (
          <>
            <figure className="band__photo">
              <img src={image} alt={imageAlt} />
            </figure>
            <div className={panelClass}>
              {children}
            </div>
          </>
        )}
        
      </div>
      <div className="band__strip band__strip--bottom"></div>
    </section>
  );
};

export default FormSection;