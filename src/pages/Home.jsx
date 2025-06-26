import React, { useState } from 'react';
import CalculateForm from '../components/CalculateForm';

const Home = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}>
      <h1>Calculadora de 3 Números</h1>
      <CalculateForm onResult={setResult} onError={setError} />
      {result !== null && (
        <div style={{ marginTop: 20, color: 'green', fontWeight: 'bold' }}>
          Resultado: {result}
        </div>
      )}
      {error && (
        <div style={{ marginTop: 20, color: 'red', fontWeight: 'bold' }}>
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default Home;
