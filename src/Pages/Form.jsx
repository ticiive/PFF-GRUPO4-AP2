import React, { useState } from 'react';

// (As importações de PageTitleBar, FormSection, Form.css, e as imagens continuam iguais)
import PageTitleBar from '../componentes/PageTitleBar';
import FormSection from '../componentes/FormSection';
import './Form.css'; 
import imgForm1 from '../assets/image_4edit.png';
import imgForm2 from '../assets/image 5.png';


// --- NOVO COMPONENTE 1: CAMPOS DA EMPRESA ---
// Este componente recebe o 'formData' e o 'handleChange' como props
// Ele não será "destruído" a cada re-renderização
const CompanyFields = ({ formData, handleChange }) => {
  return (
    <>
      <h2><span>Informações da Empresa:</span></h2>
          
      <label htmlFor="companyName">Nome da Empresa:</label>
      <input type="text" id="companyName" name="companyName" placeholder="Ex.: Tech Solutions LTDA" value={formData.companyName} onChange={handleChange} />

      <label htmlFor="cnpj">CNPJ:</label>
      <input type="text" id="cnpj" name="cnpj" placeholder="00.000.000/0001-00" value={formData.cnpj} onChange={handleChange} />

      <label htmlFor="email">Email para contato:</label>
      <input type="email" id="email" name="email" placeholder="contato@empresa.com" value={formData.email} onChange={handleChange} />

      <label>Número de colaboradores da empresa:</label>
      <div className="choices">
        <label><input type="radio" name="collabs" value="1-10" checked={formData.collabs === '1-10'} onChange={handleChange} /> 1 a 10</label>
        <label><input type="radio" name="collabs" value="11-20" checked={formData.collabs === '11-20'} onChange={handleChange} /> 11 a 20</label>
        <label><input type="radio" name="collabs" value="21-50" checked={formData.collabs === '21-50'} onChange={handleChange} /> 21 a 50</label>
        <label><input type="radio" name="collabs" value="50-100" checked={formData.collabs === '50-100'} onChange={handleChange} /> 50 a 100</label>
        <label><input type="radio" name="collabs" value="100+" checked={formData.collabs === '100+'} onChange={handleChange} /> Mais que 100</label>
      </div>

      <label htmlFor="hubs">Está vinculada ao Hubs?</label>
      <select id="hubs" name="hubs" value={formData.hubs} onChange={handleChange}>
        <option disabled>Selecione…</option>
        <option>Sim</option>
        <option>Não</option>
      </select>

      <label htmlFor="area">Área de atuação:</label>
      <input type="text" id="area" name="area" placeholder="Ex.: Fintech, Varejo, Educação…" value={formData.area} onChange={handleChange} />
    </>
  );
};


// --- NOVO COMPONENTE 2: CAMPOS DO PROJETO ---
// (Mesma lógica do de cima)
const ProjectFields = ({ formData, handleChange }) => {
  return (
    <>
      <h2><span>Informações do Projeto:</span></h2>

      <label htmlFor="time">Em quanto tempo você precisa do projeto?</label>
      <select id="time" name="time" value={formData.time} onChange={handleChange}>
        <option disabled>Selecione…</option>
        <option>Urgente (1–2 semanas)</option>
        <option>Curto prazo (1 mês)</option>
        <option>Médio prazo (2–3 meses)</option>
        <option>Sem pressa</option>
      </select>

      <label htmlFor="demand">Tipo de demanda:</label>
      <input type="text" id="demand" name="demand" placeholder="Ex.: Front-end, Back-end, Landing Page, Dados…" value={formData.demand} onChange={handleChange} />

      <label htmlFor="description">Descrição do projeto:</label>
      <textarea id="description" name="description" placeholder="Descreva o escopo, requisitos e referências" value={formData.description} onChange={handleChange}></textarea>

      <label className="terms">
        <input type="checkbox" id="terms" name="terms" checked={formData.terms} onChange={handleChange} /> Eu concordo com os <a href="#">Termos de uso</a>
      </label>

      <button type="submit" className="btn-form-submit">Enviar</button>
    </>
  );
};


// --- COMPONENTE PRINCIPAL (A PÁGINA) ---
const Form = () => {
  // (O useState, handleChange, e handleSubmit continuam EXATAMENTE IGUAIS)
  const [formData, setFormData] = useState({
    companyName: '',
    cnpj: '',
    email: '',
    collabs: '',
    hubs: 'Selecione…',
    area: '',
    time: 'Selecione…',
    demand: '',
    description: '',
    terms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    // ... (sua lógica de validação) ...
    let errors = [];
    if (formData.companyName.trim() === '') errors.push('O nome da empresa é obrigatório.');
    // ... etc ...
    if (errors.length > 0) {
      alert('Por favor, corrija os seguintes erros:\n\n' + errors.join('\n'));
    } else {
      alert('Formulário enviado com sucesso!');
    }
  };

  return (
    <div className="form-page-wrapper">
      <PageTitleBar title="Formulário" />
      
      <form onSubmit={handleSubmit}>
        
        {/* --- SEÇÃO 1: EMPRESA --- */}
        {/* Agora passamos o NOVO componente como children */}
        <FormSection image={imgForm1} imageAlt="Profissional da empresa">
          <CompanyFields formData={formData} handleChange={handleChange} />
        </FormSection>

        {/* --- SEÇÃO 2: PROJETO --- */}
        {/* E passamos o outro NOVO componente aqui */}
        <FormSection image={imgForm2} imageAlt="Profissional satisfeito com projeto" reverse={true}>
          <ProjectFields formData={formData} handleChange={handleChange} />
        </FormSection>
        
      </form>
    </div>
  );
};

export default Form;