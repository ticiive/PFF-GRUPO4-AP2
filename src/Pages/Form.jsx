import React, { useState } from 'react';

// (Importações dos componentes e CSS continuam iguais)
import PageTitleBar from '../componentes/PageTitleBar';
import FormSection from '../componentes/FormSection';
import CompanyFields from '../componentes/CompanyFields';
import ProjectFields from '../componentes/ProjectFields';
import './Form.css'; 
import '../componentes/FormSection.css'; 
import imgForm1 from '../assets/image_4edit.png';
import imgForm2 from '../assets/image 5.png';

// ===================================================================
// 1. FUNÇÃO AUXILIAR PARA VALIDAR CNPJ (COLOQUE FORA DO COMPONENTE)
// ===================================================================
function isValidCNPJ(cnpj) {
  if (!cnpj) return false;

  // Remove caracteres especiais (pontos, barras, traços)
  const cleanedCnpj = cnpj.replace(/[^\d]+/g, '');

  // 1. Verifica se tem 14 dígitos
  if (cleanedCnpj.length !== 14) return false;

  // 2. Verifica se todos os dígitos são iguais (ex: 11.111.111/1111-11)
  if (/^(\d)\1+$/.test(cleanedCnpj)) return false;

  // 3. Validação dos Dígitos Verificadores (Lógica do Modulo 11)
  let size = 12;
  let sum = 0;
  let weights = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  // --- Cálculo do 1º Dígito Verificador ---
  for (let i = 0; i < size; i++) {
    sum += parseInt(cleanedCnpj[i]) * weights[i];
  }
  let remainder = sum % 11;
  let dv1 = (remainder < 2) ? 0 : 11 - remainder;

  // Verifica o 1º dígito
  if (parseInt(cleanedCnpj[12]) !== dv1) return false;

  // --- Cálculo do 2º Dígito Verificador ---
  size = 13;
  sum = 0;
  weights = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]; // Pesos mudam

  for (let i = 0; i < size; i++) {
    sum += parseInt(cleanedCnpj[i]) * weights[i];
  }
  remainder = sum % 11;
  let dv2 = (remainder < 2) ? 0 : 11 - remainder;

  // Verifica o 2º dígito
  if (parseInt(cleanedCnpj[13]) !== dv2) return false;

  // Se passou em tudo, é válido
  return true;
}


// ===================================================================
// O COMPONENTE PRINCIPAL DA PÁGINA
// ===================================================================
const Form = () => {
  // (O useState e o handleChange continuam iguais)
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

  // ===================================================================
  // 2. O 'handleSubmit' ATUALIZADO COM AS NOVAS VALIDAÇÕES
  // ===================================================================
  const handleSubmit = (e) => {
    e.preventDefault(); 
    let errors = [];

    // --- Validações de campos vazios (que já tínhamos) ---
    if (formData.companyName.trim() === '') errors.push('O nome da empresa é obrigatório.');
    if (formData.hubs === 'Selecione…') errors.push('Selecione se a empresa está vinculada ao Hubs.');
    if (formData.area.trim() === '') errors.push('A área de atuação é obrigatória.');
    if (formData.time === 'Selecione…') errors.push('Selecione o prazo do projeto.');
    if (formData.demand.trim() === '') errors.push('O tipo de demanda é obrigatório.');
    if (formData.description.trim() === '') errors.push('A descrição do projeto é obrigatória.');
    if (formData.collabs === '') errors.push('Selecione o número de colaboradores.');
    if (!formData.terms) errors.push('Você deve concordar com os Termos de Uso.');
    
    // --- NOVAS VALIDAÇÕES (CNPJ) ---
    if (formData.cnpj.trim() === '') {
      errors.push('O CNPJ é obrigatório.');
    } else if (!isValidCNPJ(formData.cnpj)) { // <-- Valida o formato
      errors.push('O CNPJ informado é inválido.');
    }

    // --- NOVAS VALIDAÇÕES (E-mail) ---
    // Expressão regular simples para e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email.trim() === '') {
      errors.push('O e-mail para contato é obrigatório.');
    } else if (!emailRegex.test(formData.email)) { // <-- Valida o formato
      errors.push('O e-mail informado é inválido.');
    }

    // --- Exibe os erros ou o sucesso ---
    if (errors.length > 0) {
      alert('Por favor, corrija os seguintes erros:\n\n' + errors.join('\n'));
    } else {
      alert('Formulário enviado com sucesso!');
      console.log('Dados enviados:', formData);
    }
  };

  // (O JSX do 'return' continua exatamente o mesmo)
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