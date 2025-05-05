const inputValor = document.getElementById('valorEntrada');
const converter = document.getElementById('converter');
const seletorOrigem = document.getElementById('moedaOrigem');
const seletorDestino = document.getElementById('moedaDestino');
const resultado = document.getElementById('resultado');
const btnInverter = document.getElementById('inverter');

converter.addEventListener('click', evento => {
  evento.preventDefault();

  const valor = Number(inputValor.value);
  const taxaUSDparaBRL = 5;

  let resultadoFinal = '';

  if (seletorOrigem.value === 'USD' && seletorDestino.value === 'BRL') {
    const convertido = valor * taxaUSDparaBRL;
    resultadoFinal = `$${valor} → R$${convertido.toFixed(2)}`;
  } else if (seletorOrigem.value === 'BRL' && seletorDestino.value === 'USD') {
    const convertido = valor / taxaUSDparaBRL;
    resultadoFinal = `R$${valor} → $${convertido.toFixed(2)}`;
  } else {
    resultadoFinal = `Nenhuma conversão necessária (mesma moeda)`;
  }

  resultado.innerHTML = `Valor convertido: <strong>${resultadoFinal}</strong>`;
});


btnInverter.addEventListener('click', () => {
  const temp = seletorOrigem.value;
  seletorOrigem.value = seletorDestino.value;
  seletorDestino.value = temp;
});