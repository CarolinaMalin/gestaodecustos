import React, { useState } from 'react';

function App() {
  const [quantidadePessoas, setQuantidadePessoas] = useState(0);
  const [custoAtracao, setCustoAtracao] = useState(0);
  const [margemLucro, setMargemLucro] = useState(0);
  const [ingresso, setIngresso] = useState(0);
  const [calculando, setCalculando] = useState(false);

  const calcularReceita = (custoFestaTotal, margemLucro) => {
    return custoFestaTotal * ((margemLucro / 100) + 1);
  };

  const calcularCustos = (quantidadePessoas, custoAtracao) => {
    const quantidadeBombeiros = quantidadePessoas / 500;
    const custoBombeiro = quantidadeBombeiros * 140;

    const quantidadePolicia = quantidadePessoas / 200;
    const custoPolicia = quantidadePolicia * 200;

    const custoAluguel = quantidadePessoas / 3.5 * 40;

    const custoFestaTotal = custoBombeiro + custoPolicia + custoAluguel + custoAtracao;

    return [custoAluguel, custoBombeiro, custoPolicia, custoFestaTotal];
  };

  const calcularImpostos = (receitaTotal) => {
    const iss = receitaTotal * 0.05; // 5% do total
    const icms = receitaTotal * 0.18; // 18% do total
    const cofins = receitaTotal * 0.03; // 3% do total
    const pis = receitaTotal * 0.0065; // 0.65% do total

    return [iss, icms, cofins, pis];
  };

  const calcularReceitaLiquida = (receitaTotal) => {
    const [iss, icms, cofins, pis] = calcularImpostos(receitaTotal);

    return receitaTotal - iss - icms - cofins - pis;
  };

  const ingressos = (quantidadePessoas, receita) => {
    const ingresso = (receita * 0.6) / quantidadePessoas;
    const impostos = calcularImpostos(ingresso);
    return ingresso + impostos.reduce((total, imposto) => total + imposto, 0);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setCalculando(true);
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulando um cálculo demorado (2 segundos)
    const custoFestaTotal = calcularCustos(quantidadePessoas, custoAtracao)[3];
    const receita = calcularReceita(custoFestaTotal, margemLucro);
    const novoIngresso = ingressos(quantidadePessoas, receita);
    setIngresso(novoIngresso);
    setCalculando(false);
  };

  const [custoAluguel, custoBombeiro, custoPolicia, custoFestaTotal] = calcularCustos(quantidadePessoas, custoAtracao);
  const receita = calcularReceita(custoFestaTotal, margemLucro);
  const [iss, icms, cofins, pis] = calcularImpostos(receita);
  const receitaLiquida = calcularReceitaLiquida(receita);

  return (
        <div style={{ backgroundColor: '#fafafa', color: '#333', fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <header style={{ backgroundColor: 'grey', marginBottom: '20px', paddingTop: '20px', paddingBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="https://media.tenor.com/3dosVyYlXtwAAAAC/light-show-concert.gif" alt="Logo" style={{ height: '50px', marginRight: '15px' }} />
          <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Eventos.com</h1>
        </div>
      </header>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label>
          Quantidade de Pessoas:
          <input type="number" value={quantidadePessoas} onChange={(event) => setQuantidadePessoas(parseFloat(event.target.value))} />
        </label>
        <br />
        <label>
          Custo da Atração:
          <input type="number" value={custoAtracao} onChange={(event) => setCustoAtracao(parseFloat(event.target.value))} />
        </label>
        <br />
        <label>
          Margem de Lucro (%):
          <input type="number" value={margemLucro} onChange={(event) => setMargemLucro(parseFloat(event.target.value))} />
        </label>
        <br />
        <button type="submit" style={{ background: '#61dafb', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', outline: 'none', fontWeight: 'bold' }} disabled={calculando}>
          {calculando ? 'Calculando...' : 'Calcular'}
        </button>
      </form>
      <div>
        <h2>Custos:</h2>
        <p>Custo da Atração: R${custoAtracao.toFixed(2)}</p>
        <p>Custo do Aluguel: R${custoAluguel.toFixed(2)}</p>
        <p>Custo dos Bombeiros: R${custoBombeiro.toFixed(2)}</p>
        <p>Custo da Polícia: R${custoPolicia.toFixed(2)}</p>
        <p>Custo Total da Festa: R${custoFestaTotal.toFixed(2)}</p>
      </div>
      <div>
        <h2>Impostos:</h2>
        <p>ISS: R${iss.toFixed(2)}</p>
        <p>ICMS: R${icms.toFixed(2)}</p>
        <p>COFINS: R${cofins.toFixed(2)}</p>
        <p>PIS: R${pis.toFixed(2)}</p>
      </div>
      <div>
        <h2>Receita:</h2>
        <p>Receita Necessária (incluindo lucro): R${receita.toFixed(2)}</p>
        <p>Valor sugerido do Ingresso: R${ingresso.toFixed(2)}</p>
        <p>Receita líquida após a dedução do ISS, ICMS, COFINS e PIS: R${receitaLiquida.toFixed(2)}</p>
      </div>
      <footer style={{ backgroundColor: 'grey', marginTop: '20px', paddingTop: '20px', paddingBottom: '20px', textAlign: 'center' }}>
        <p>&copy; 2023 Eventos.com. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
