export function somar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os valores devem ser números.');
  }

  return a + b;
}

export function subtrair(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os valores devem ser números.');
  }

  return a - b;
}

export function multiplicar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os valores devem ser números.');
  }

  return a * b;
}

export function dividir(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Os valores devem ser números.');
  }

  if (b === 0) {
    throw new Error('Divisão por zero não é permitida.');
  }
  return a / b;
}

export function elevar(base, expoente) {
  if (typeof base !== 'number' || typeof expoente !== 'number') {
    throw new Error('Os valores devem ser números.');
  }

  return Math.pow(base, expoente);
}

export function fatorial(n) {

  if (typeof n !== 'number'){
    throw new Error('O valor deve ser um número.');
  }

  if (n < 0) {
    throw new Error('Fatorial de número negativo não é permitido.');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let resultado = 1;
  for (let i = 2; i <= n; i += 1) {
    resultado *= i;
  }

  return resultado;
}

export function ehPar(numero) {
  if (typeof numero !== 'number') {
    throw new Error('O valor deve ser um número.');
  }

  return numero % 2 === 0;
}

export function media(valores) {
  if (!Array.isArray(valores) || valores.length === 0) {
    throw new Error('É necessário informar uma lista de números válida.');
  }

  const total = valores.reduce((acumulador, valor) => acumulador + valor, 0);
  return total / valores.length;
}

export function ehPrimo(numero) {
  if (!Number.isInteger(numero) || numero <= 1) {
    return false;
  }

  if (numero === 2) {
    return true;
  }

  if (numero % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(numero); i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

export function limitar(valor, minimo, maximo) {
  if (minimo > maximo) {
    throw new Error('O valor mínimo não pode ser maior que o máximo.');
  }

  return Math.min(Math.max(valor, minimo), maximo);
}

export function fibonacci(posicao) {
  if (!Number.isInteger(posicao) || posicao < 0) {
    throw new Error('A posição deve ser um número inteiro não negativo.');
  }

  if (posicao === 0) return 0;
  if (posicao === 1) return 1;

  let anterior = 0;
  let atual = 1;

  for (let i = 2; i <= posicao; i += 1) {
    const proximo = anterior + atual;
    anterior = atual;
    atual = proximo;
  }

  return atual;
}

export const sum = somar;
export const subtract = subtrair;
export const multiply = multiplicar;
export const divide = dividir;
export const power = elevar;
export const factorial = fatorial;
export const isEven = ehPar;
export const average = media;
export const isPrime = ehPrimo;
export const clamp = limitar;
