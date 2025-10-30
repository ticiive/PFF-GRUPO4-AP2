import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe seus componentes de layout
import Header from './componentes/Header';
import Footer from './componentes/Footer';

// Importe suas páginas
import Home from './pages/Home';
import Galeria from './Pages/Galeria';
import Sobre from './pages/Sobre';
import Form from './Pages/Form';

function App() {
  return (
    <BrowserRouter>
      {/* Header e Footer ficam FORA das rotas para aparecerem sempre */}
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
