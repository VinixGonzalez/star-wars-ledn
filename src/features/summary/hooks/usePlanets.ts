import { useQuery } from "@tanstack/react-query";
import { qk } from "shared/api";
import { planetsApi } from "shared/api/planets";

export const usePlanets = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: qk.planets(),
    queryFn: planetsApi.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });

  return {
    planets: data?.planets,
    isLoading,
    error,
  };
};
