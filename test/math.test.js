import { describe, expect, it } from "vitest";
import { somar, subtrair, multiplicar, dividir, elevar,  fatorial, ehPar, ehPrimo, limitar, fibonacci, media } from "../src/math.js";

describe('Funções de soma', ()=>{
    it('Deve somar dois numeros', ()=>{
        expect(somar(2, 3)).toBe(5);
    });
    it('Deve lançar um erro ao somar valores não numericos', ()=>{
        expect(()=> somar(2, "sim").toThrow('os valores devem ser numeros.'))
    });
    it("Deve somar números negativos", () => {
        expect(somar(-2, -3)).toBe(-5);
    });
}),

describe('Funções de subtração', ()=>{
    it('Deve subtrair dois numeros', ()=>{
        expect(subtrair(10, 5)).toBe(5);
    });
    it('Deve lançar um erro ao somar valores não numericos', ()=>{
        expect(()=> subtrair(10, "sim").toThrow('os valores devem ser numeros.'))
    });
    it("Deve subtrair números negativos", () => {
        expect(subtrair(-10, -5)).toBe(-5);
    });
}),

describe('Funções de multiplicar', ()=>{
    it('Deve multiplicar dois numeros', ()=>{
        expect(multiplicar(2, 5)).toBe(10);
    });
    it('Deve lançar um erro ao Multiplicar valores não numericos', ()=>{
        expect(()=> multiplicar(2, "sim").toThrow('os valores devem ser numeros.'))
    });
    it("Deve multiplicar por zero", () => {
    expect(multiplicar(2, 0)).toBe(0);
  });
});

describe('Funções de divisão', ()=>{
    it('Deve dividir dois numeros', ()=>{
        expect(dividir(10, 2)).toBe(5);
    });
    it('Deve lançar um erro ao dividir valores não numericos', ()=>{
        expect(()=> dividir(10, "sim").toThrow('os valores devem ser numeros.'))
    });
    it("Deve lançar erro ao dividir por zero", () =>{
    expect(() => dividir(10, 0)).toThrow("Divisão por zero não é permitida.")
    });
     it("Deve retornar resultado decimal", () => {
    expect(dividir(5, 2)).toBe(2.5);
  });
}),

describe("Funções de potenciação", () => {
    it("Deve elevar um número a uma potência", () => {
        expect(elevar(2, 3)).toBe(8);
    });
    it("Deve retornar 1 quando o expoente for zero", () => {
        expect(elevar(5, 0)).toBe(1);
    });
    it("Deve lançar erro ao elevar valores não numéricos", () => {
        expect(() => elevar(2, "sim")).toThrow("Os valores devem ser números.");
    });
}),

describe("Funções de fatorial", () => {
    it("Deve calcular o fatorial de um número", () => {
        expect(fatorial(5)).toBe(120);
    });
    it("Deve retornar 1 para o fatorial de zero", () => {
        expect(fatorial(0)).toBe(1);
    });
    it("Deve retornar 1 para o fatorial de um", () => {
        expect(fatorial(1)).toBe(1);
    });
    it("Deve lançar erro para número negativo", () => {
        expect(() => fatorial(-5)).toThrow("Fatorial de número negativo não é permitido.");
    });
    it("Deve lançar erro para valor não numérico", () => {
        expect(() => fatorial("sim")).toThrow("O valor deve ser um número.");
    });
}),

describe("Funções de número par", () => {
    it("Deve retornar true para número par", () => {
        expect(ehPar(4)).toBe(true);
    });
    it("Deve retornar false para número ímpar", () => {
        expect(ehPar(5)).toBe(false);
    });
    it("Deve retornar true para zero", () => {
        expect(ehPar(0)).toBe(true);
    });
    it("Deve lançar erro para valor não numérico", () => {
        expect(() => ehPar("sim")).toThrow("O valor deve ser um número.");
    });
}),

describe("Funções de média", () => {
    it("Deve calcular a média de uma lista de números", () => {
        expect(media([2, 4, 6])).toBe(4);
    });
    it("Deve calcular a média com resultado decimal", () => {
        expect(media([1, 2])).toBe(1.5);
    });
    it("Deve lançar erro para lista vazia", () => {
        expect(() => media([])).toThrow("É necessário informar uma lista de números válida.");
    });
    it("Deve lançar erro quando não for informado um array", () => {
        expect(() => media("sim, não, sim")).toThrow("É necessário informar uma lista de números válida.");
    });
})

describe("Funções de número primo", () => {
    it("Deve retornar true para número primo", () => {
        expect(ehPrimo(7)).toBe(true);
    });
    it("Deve retornar false para número não primo", () => {
        expect(ehPrimo(8)).toBe(false);
    });
    it("Deve retornar true para o número 2", () => {
        expect(ehPrimo(2)).toBe(true);
    });
    it("Deve retornar false para zero e um", () => {
        expect(ehPrimo(0)).toBe(false);
        expect(ehPrimo(1)).toBe(false);
    });
    it("Deve retornar false para números negativos", () => {
        expect(ehPrimo(-7)).toBe(false);
    });
    it("Deve retornar false para números decimais", () => {
        expect(ehPrimo(2.5)).toBe(false);
    });
}),

describe("Funções de limitar valor", () => {
  it("Deve lançar erro quando o mínimo for maior que o máximo", () => {
    expect(() => limitar(5, 10, 1)).toThrow("O valor mínimo não pode ser maior que o máximo.");
  });
}),

describe("Funções de Fibonacci", () => {
  it("Deve retornar 0 para a posição 0", () => {
    expect(fibonacci(0)).toBe(0);
  });
  it("Deve retornar 1 para a posição 1", () => {
    expect(fibonacci(1)).toBe(1);
  });
  it("Deve calcular corretamente a sequência de Fibonacci", () => {
    expect(fibonacci(2)).toBe(1);
  });
  it("Deve lançar erro para posição negativa", () => {
    expect(() => fibonacci(-1)).toThrow("A posição deve ser um número inteiro não negativo.");
  });
  it("Deve lançar erro para posição decimal", () => {
    expect(() => fibonacci(2.5)).toThrow("A posição deve ser um número inteiro não negativo.");
  });
  it("Deve lançar erro para valor não numérico", () => {
    expect(() => fibonacci("simsim")).toThrow("A posição deve ser um número inteiro não negativo.");
  });
});



