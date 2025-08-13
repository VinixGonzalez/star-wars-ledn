import { ExchangeRate } from "entities/exchange";
import { api } from "./client";

export const exchangeApi = {
  getRate: async (): Promise<ExchangeRate> => {
    const response = await api.get<ExchangeRate>("/exchange-rate");
    return response.data;
  },
};
