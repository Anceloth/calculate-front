import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CalculateForm = ({ onResult, onError }) => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    onResult(null);
    onError(null);
    try {
      const params = new URLSearchParams({
        x: num1,
        y: num2,
        n: num3
      });
      const url = `${import.meta.env.VITE_API_BASE_URL}?${params.toString()}`;
      const response = await fetch(url, {
        method: 'GET',
      });
      console.log(`Response ${response}`)
      const data = await response.json();
      if (response.ok) {
        onResult(data.result ?? data);
      } else {
        onError(data.error ?? 'Error desconocido');
      }
    } catch (err) {
      onError('No se pudo conectar con la API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320 }}>
      <input type="number" value={num1} onChange={e => setNum1(e.target.value)} placeholder="Número 1" required />
      <input type="number" value={num2} onChange={e => setNum2(e.target.value)} placeholder="Número 2" required />
      <input type="number" value={num3} onChange={e => setNum3(e.target.value)} placeholder="Número 3" required />
      <button type="submit" disabled={loading}>{loading ? 'Calculando...' : 'Calcular'}</button>
    </form>
  );
};
CalculateForm.propTypes = {
  onResult: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
};

export default CalculateForm;

