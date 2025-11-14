import React, { useState } from 'react';
import PageTitleBar from '../componentes/PageTitleBar';
import FormSection from '../componentes/FormSection';
import CompanyFields from '../componentes/CompanyFields';
import ProjectFields from '../componentes/ProjectFields';
import './Form.css'; 
import '../componentes/FormSection.css'; 
import imgForm1 from '../assets/image_4edit.png';
import imgForm2 from '../assets/image 5.png';

function isValidCNPJ(cnpj) {
  if (!cnpj) return false;
  const cleanedMask = cnpj.replace(/[\.\/\-]/g, '');
  if (cleanedMask.trim() === '') return false;
  const onlyNumbersRegex = /^\d+$/;
  return onlyNumbersRegex.test(cleanedMask);
}

const Form = () => {
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
    let errors = [];

    if (formData.companyName.trim() === '') errors.push('O nome da empresa é obrigatório.');
    if (formData.hubs === 'Selecione…') errors.push('Selecione se a empresa está vinculada ao Hubs.');
    if (formData.area.trim() === '') errors.push('A área de atuação é obrigatória.');
    if (formData.time === 'Selecione…') errors.push('Selecione o prazo do projeto.');
    if (formData.demand.trim() === '') errors.push('O tipo de demanda é obrigatório.');
    if (formData.description.trim() === '') errors.push('A descrição do projeto é obrigatória.');
    if (formData.collabs === '') errors.push('Selecione o número de colaboradores.');
    if (!formData.terms) errors.push('Você deve concordar com os Termos de Uso.');

    if (formData.cnpj.trim() === '') {
      errors.push('O CNPJ é obrigatório.');
    } else if (!isValidCNPJ(formData.cnpj)) { 
      errors.push('O CNPJ informado é inválido.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === '') {
      errors.push('O e-mail para contato é obrigatório.');
    } else if (!emailRegex.test(formData.email)) { 
      errors.push('O e-mail informado é inválido.');
    }

    if (errors.length > 0) {
      alert('Por favor, corrija os seguintes erros:\n\n' + errors.join('\n'));
    } else {
      alert('Formulário enviado com sucesso!');
      console.log('Dados enviados:', formData);
      setFormData({
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
    }
  };

  return (
    <div className="form-page-wrapper">
      <PageTitleBar title="Formulário" />
      
      <form onSubmit={handleSubmit}>
        
        <FormSection image={imgForm1} imageAlt="Profissional da empresa">
          <CompanyFields formData={formData} handleChange={handleChange} />
        </FormSection>

        <FormSection image={imgForm2} imageAlt="Profissional satisfeito com projeto" reverse={true}>
          <ProjectFields formData={formData} handleChange={handleChange} />
        </FormSection>
        
      </form>
    </div>
  );
};

export default Form;
