import { Transaction, TransactionsResponse } from "entities/transaction";
import { api } from "./client";

export const transactionsApi = {
  getAll: async (): Promise<TransactionsResponse> => {
    const response = await api.get<TransactionsResponse>("/transactions");
    return response.data;
  },

  getById: async (id: string): Promise<Transaction> => {
    const response = await api.get<Transaction>(`/transactions/${id}`);
    return response.data;
  },

  getByUser: async (userId: string): Promise<TransactionsResponse> => {
    const response = await api.get<TransactionsResponse>(
      `/transactions/user/${userId}`
    );
    return response.data;
  },

  getByUsers: async (userIds: string[]): Promise<TransactionsResponse> => {
    const response = await api.get<TransactionsResponse>(
      `/transactions/users/${JSON.stringify(userIds)}`
    );
    return response.data;
  },
};
