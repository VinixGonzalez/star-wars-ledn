import { api } from "./client";
import { PlanetResponse, PlanetsResponse } from "entities/planet";

export const planetsApi = {
  getAll: async (): Promise<PlanetsResponse> => {
    const response = await api.get<PlanetsResponse>("/planets");
    return response.data;
  },
  getById: async (id: string): Promise<PlanetResponse | { error: string }> => {
    const response = await api.get<PlanetResponse>(`/planets/${id}`);
    return response.data;
  },
};
