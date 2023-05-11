import React, { useState } from 'react';

function App() {
  const [custo, setCusto] = useState(0);
  const [tipo, setTipo] = useState('');
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const [receitas, setReceitas] = useState([]);

  const adicionarReceita = () => {
    const novaReceita = { tipo, receita: preco * quantidade };
    setReceitas([...receitas, novaReceita]);
    setTipo('');
    setPreco(0);
    setQuantidade(0);
  };

  const calcularReceitaTotal = () => {
    return receitas.reduce((total, receita) => total + receita.receita, 0);
  };

  const calcularReceitaNecessaria = () => {
    const total = calcularReceitaTotal();
    return custo - total;
  };

  return (
    <div>
      <h1>Calculadora de Receita de Evento</h1>
      <label>
        Custo do Evento:
        <input type="number" value={custo} onChange={(e) => setCusto(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Tipo de Receita:
        <input type="text" value={tipo} onChange={(e) => setTipo(e.target.value)} />
      </label>
      <br />
      <label>
        Preço Unitário:
        <input type="number" value={preco} onChange={(e) => setPreco(Number(e.target.value))} />
      </label>
      <br />
      <label>
        Quantidade:
        <input type="number" value={quantidade} onChange={(e) => setQuantidade(Number(e.target.value))} />
      </label>
      <br />
      <button onClick={adicionarReceita}>Adicionar Receita</button>
      <h2>Receitas:</h2>
      <ul>
        {receitas.map((receita, index) => (
          <li key={index}>{receita.tipo}: {receita.receita}</li>
        ))}
      </ul>
      <h2>Receita Total: {calcularReceitaTotal()}</h2>
      <h2>Receita Necessária: {calcularReceitaNecessaria()}</h2>
    </div>
  );
}

export default App;
