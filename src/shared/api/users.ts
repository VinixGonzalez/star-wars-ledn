import { UsersResponse } from "entities/user/types";
import { api } from "./client";

export const usersApi = {
  getByPlanet: async (planetId: string): Promise<UsersResponse> => {
    const response = await api.get<UsersResponse>(`/users/planet/${planetId}`);
    return response.data;
  },
};
