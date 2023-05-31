import React, { useState } from 'react';

function App() {
  const [quantidadePessoas, setQuantidadePessoas] = useState(0);
  const [custoAtracao, setCustoAtracao] = useState(0);
  const [margemLucro, setMargemLucro] = useState(0);
  const [custoFesta, setCustoFesta] = useState(0);
  const [receita, setReceita] = useState(0);
  const [precoIngresso, setPrecoIngresso] = useState(0);
  const [impostos, setImpostos] = useState({iss: 0, icms: 0, cofins: 0, pis: 0});
  const [receitaLiquida, setReceitaLiquida] = useState(0);

  const calcularCustoFesta = (quantidadePessoas, custoAtracao) => {
    const quantidadeBombeiros = quantidadePessoas/500;
    const custoBombeiro = quantidadeBombeiros * 140;
    const quantidadePolicia = quantidadePessoas/200;
    const custoPolicia = quantidadePolicia * 200;
    const custoAluguel = quantidadePessoas/3.5 * 40;
    return custoBombeiro + custoPolicia + custoAluguel + custoAtracao;
  };

  const calcularReceita = (custoFesta, margemLucro) => {
    return custoFesta * ((margemLucro / 100) + 1);
  };

  const calcularPrecoIngresso = (quantidadePessoas, receita) => {
    const impostoIngresso = 0.05 + 0.18 + 0.03 + 0.0065;  // ISS, ICMS, COFINS, PIS
    return (receita * 0.6 / quantidadePessoas) + impostoIngresso;
  };

  const calcularImpostos = (receita) => {
    const iss = receita * 0.05;  // 5% do total
    const icms = receita * 0.18;  // 18% do total
    const cofins = receita * 0.03;  // 3% do total
    const pis = receita * 0.0065;  // 0.65% do total
    return {iss, icms, cofins, pis};
  };

  const calcularReceitaLiquida = (receita, impostos) => {
    return receita - impostos.iss - impostos.icms - impostos.cofins - impostos.pis;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const custoFestaCalculado = calcularCustoFesta(quantidadePessoas, custoAtracao);
    setCustoFesta(custoFestaCalculado);
    const receitaCalculada = calcularReceita(custoFestaCalculado, margemLucro);
    setReceita(receitaCalculada);
    const precoIngressoCalculado = calcularPrecoIngresso(quantidadePessoas, receitaCalculada);
    setPrecoIngresso(precoIngressoCalculado);
    const impostosCalculados = calcularImpostos(receitaCalculada);
    setImpostos(impostosCalculados);
    const receitaLiquidaCalculada = calcularReceitaLiquida(receitaCalculada, impostosCalculados);
    setReceitaLiquida(receitaLiquidaCalculada);
  };

  return (
    <div style={{ backgroundColor: '#fafafa', color: '#333', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ backgroundColor: 'grey', marginBottom: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://media.tenor.com/3dosVyYlXtwAAAAC/light-show-concert.gif" alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
          <h1>Eventos.com</h1>
        </div>
      </header>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label>
          Quantidade de Pessoas:
           <input type="number" value={quantidadePessoas} onChange={e => setQuantidadePessoas(parseFloat(e.target.value))} />
        </label>
           <br />        
        <label>
          Custo da Atração:
            <input type="number" value={custoAtracao} onChange={e => setCustoAtracao(parseFloat(e.target.value))} />
            
        </label>
           <br />
        <label>
          Margem de Lucro (%):
            <input type="number" value={margemLucro} onChange={e => setMargemLucro(parseFloat(e.target.value))} />
        </label>
        <br />  
        <button type="submit" style={{ marginLeft: '10px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', padding: '5px 10px' }}>Calcular</button>
      </form>
      <div>
        <p>Custo da Festa: R${custoFesta.toFixed(2)}</p>
        <p>Receita: R${receita.toFixed(2)}</p>
        <p>Preço do Ingresso: R${precoIngresso.toFixed(2)}</p>
        <p>Impostos:</p>
        <ul>
          <li>ISS: R${impostos.iss.toFixed(2)}</li>
          <li>ICMS: R${impostos.icms.toFixed(2)}</li>
          <li>COFINS: R${impostos.cofins.toFixed(2)}</li>
          <li>PIS: R${impostos.pis.toFixed(2)}</li>
        </ul>
        <p>: R${receitaLiquida.toFixed(2)}</p>
      </div>
      <div style={{ marginTop: '20px' }}>
        <img src="https://media.tenor.com/NvnO0AuuzvkAAAAC/dancing-cats.gif" alt="Festa" style={{ width: '20%' }} />
      </div>
    </div>
  );
}

export default App;
