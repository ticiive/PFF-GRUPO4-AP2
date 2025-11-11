import React from 'react';
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

export default ProjectFields;