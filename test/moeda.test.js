import { describe, expect, it, vi, beforeEach } from "vitest";
import axios from "axios";
import {buscarCotacao, converterMoeda,} from "../src/moeda.js";

vi.mock("axios", () => ({
  default: {
    get: vi.fn(),
  },
}));

describe("Biblioteca de moedas", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("Deve buscar a cotação atual de uma moeda válida", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: {
          BRL: 5.36,
        },
      },
    });

    const cotacao = await buscarCotacao("USD", "BRL");

    expect(cotacao).toBe(5.36);

    expect(axios.get).toHaveBeenCalledWith(
      "https://api.frankfurter.app/latest",
      {
        params: {
          from: "USD",
          to: "BRL",
        },
      }
    );
  });

  it("Deve buscar a cotação de outra moeda válida", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: {
          EUR: 0.92,
        },
      },
    });

    const cotacao = await buscarCotacao("USD", "EUR");

    expect(cotacao).toBe(0.92);
  });

  it("Deve converter um valor positivo entre moedas", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: {
          BRL: 5.36,
        },
      },
    });

    const resultado = await converterMoeda(10, "USD", "BRL");

    expect(resultado).toBe(53.6);
  });

  it("Deve converter um valor com resultado decimal", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: {
          BRL: 5.367,
        },
      },
    });

    const resultado = await converterMoeda(10, "USD", "BRL");

    expect(resultado).toBe(53.67);
  });

  it("Deve lançar erro quando a moeda destino não for encontrada", async () => {
    axios.get.mockResolvedValue({
      data: {
        rates: {
          BRL: 5.36,
        },
      },
    });

    await expect(
      buscarCotacao("USD", "EUR")
    ).rejects.toThrow(
      "Moeda destino não encontrada na resposta da API."
    );
  });

  it("Deve lançar erro ao converter valor igual a zero", async () => {
    await expect(
      converterMoeda(0, "USD", "BRL")
    ).rejects.toThrow(
      "O valor deve ser maior que zero."
    );

    expect(axios.get).not.toHaveBeenCalled();
  });

  it("Deve lançar erro ao converter valor negativo", async () => {
    await expect(
      converterMoeda(-10, "USD", "BRL")
    ).rejects.toThrow("O valor deve ser maior que zero.");

    expect(axios.get).not.toHaveBeenCalled();
  });
});