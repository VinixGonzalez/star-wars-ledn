import { useQuery } from "@tanstack/react-query";
import { qk } from "shared/api";
import { usersApi } from "shared/api/users";

export const useUsersByPlanet = (planetId: string) => {
  return useQuery({
    queryKey: qk.usersByPlanet(planetId),
    queryFn: () => usersApi.getByPlanet(planetId),
    enabled: !!planetId,
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchOnWindowFocus: false,
  });
};
