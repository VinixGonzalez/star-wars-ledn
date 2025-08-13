import { useQuery } from "@tanstack/react-query";
import { qk } from "shared/api";
import { planetsApi } from "shared/api/planets";

export const usePlanet = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: qk.planet(id),
    queryFn: () => planetsApi.getById(id),
    enabled: !!id,
    refetchOnWindowFocus: false,
    select: (data) => {
      if ("error" in data) {
        throw new Error(data.error);
      }
      return data;
    },
  });

  return {
    planet: data?.planet,
    isLoading,
    error,
  };
};
