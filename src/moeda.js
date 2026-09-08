import axios from 'axios';

const BASE_URL = 'https://api.frankfurter.app';

export async function buscarCotacao(moedaOrigem, moedaDestino) {
  const resposta = await axios.get(`${BASE_URL}/latest`, {
    params: {
      from: moedaOrigem,
      to: moedaDestino,
    },
  });

  const dados = resposta.data;

  if (!dados?.rates || !dados.rates[moedaDestino]) {
    throw new Error('Moeda destino não encontrada na resposta da API.');
  }

  return Number(dados.rates[moedaDestino]);
}

export async function converterMoeda(valor, moedaOrigem, moedaDestino) {
  if (valor <= 0) {
    throw new Error('O valor deve ser maior que zero.');
  }

  const cotacao = await buscarCotacao(moedaOrigem, moedaDestino);
  return Number((valor * cotacao).toFixed(2));
}
