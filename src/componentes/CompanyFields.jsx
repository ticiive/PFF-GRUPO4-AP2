import React from 'react';

// Este componente recebe 'formData' (os valores) e 'handleChange' (a função)
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

export default CompanyFields;