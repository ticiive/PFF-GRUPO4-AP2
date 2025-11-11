import React from 'react';
import './PageTitleBar.css'; 
const PageTitleBar = ({ title }) => {
  return (
    <div className="hero-title-bar">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitleBar;