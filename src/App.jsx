import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componentes/Header';
import Footer from './componentes/Footer';


import Home from './Pages/Home.jsx';
import Galeria from './Pages/Galeria.jsx';
import Sobre from './Pages/Sobre.jsx';
import Form from './Pages/Form.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
