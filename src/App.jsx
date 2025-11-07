import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importe seus componentes de layout
import Header from './componentes/Header';
import Footer from './componentes/Footer';

// Importe suas páginas
import Home from './pages/Home.jsx';
import Galeria from './Pages/Galeria.jsx';
import Sobre from './pages/Sobre.jsx';
import Form from './Pages/Form.jsx';

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
