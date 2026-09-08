# Biblioteca de Matemática e Moedas

Este projeto reúne uma biblioteca de funções matemáticas e outra para conversão de moedas usando uma API pública gratuita.

## Estrutura

- `src/math.js` - funções matemáticas
- `src/moeda.js` - funções de conversão de moedas
- `test/math.test.js` - testes de exemplo das funções matemáticas
- `test/moeda.test.js` - testes com mock para simular a API de câmbio

## Como rodar

```bash
npm test
```

## Funções matemáticas disponíveis

- `somar(a, b)`
- `subtrair(a, b)`
- `multiplicar(a, b)`
- `dividir(a, b)`
- `elevar(base, expoente)`
- `fatorial(n)`
- `ehPar(numero)`
- `media(valores)`
- `mdc(a, b)`
- `mmc(a, b)`
- `ehPrimo(numero)`
- `limitar(valor, minimo, maximo)`
- `fibonacci(posicao)`
- `mediana(valores)`

## Funções de moeda disponíveis

- `buscarCotacao(moedaOrigem, moedaDestino)`
- `converterMoeda(valor, moedaOrigem, moedaDestino)`

A API usada é a Frankfurter, que fornece cotações em tempo real de forma gratuita.

## Objetivo

Os alunos podem praticar:
- testes de funções matemáticas
- testes com mock de API
- validações de erro
- cenários de sucesso e falha
- uso de função assíncrona com fetch
