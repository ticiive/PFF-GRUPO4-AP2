import React from 'react';
import PageTitleBar from '../componentes/PageTitleBar';
import SectionItem from '../componentes/SectionItem';
import './Sobre.css'; 
import teamImage from '../assets/image 3.png'; 
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
      <PageTitleBar title="Sobre nós" />
      
      <main className="content-section">
        <div className="text-container">
          {sections.map(section => (
            <SectionItem 
              key={section.title} 
              title={section.title} 
              text={section.text} 
            />
          ))}
        </div>
        <div className="image-container">
          <img src={teamImage} alt="Equipe ibmec trabalhando" className="team-image" />
        </div>
      </main>
    </>
  );
};

export default Sobre;