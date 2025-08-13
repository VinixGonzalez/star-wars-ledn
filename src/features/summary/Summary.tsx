import { PlanetSearch, PlanetFilters } from "./components";
import { SummarySkeleton } from "./components/SummarySkeleton";
import { usePlanets } from "./hooks/usePlanets";
import * as S from "./Summary.styles";
import { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "shared/hooks/useDebounce";
import { handleApiError } from "shared/utils/errorHandler";

export const Summary = () => {
  const navigate = useNavigate();
  const { planets, isLoading, error } = usePlanets();

  const [search, setSearch] = useState("");
  const [terrainFilter, setTerrainFilter] = useState("");
  const [climateFilter, setClimateFilter] = useState("");

  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (error) {
      handleApiError(error, "Planets");
    }
  }, [error]);

  const availableTerrains = useMemo(() => {
    if (!planets) return [];
    const terrains = new Set<string>();
    planets.forEach((planet) => {
      if (planet.terrain && planet.terrain !== "unknown") {
        planet.terrain.split(",").forEach((terrain) => {
          terrains.add(terrain.trim());
        });
      }
    });
    return Array.from(terrains).sort();
  }, [planets]);

  const availableClimates = useMemo(() => {
    if (!planets) return [];
    const climates = new Set<string>();
    planets.forEach((planet) => {
      if (planet.climate && planet.climate !== "unknown") {
        planet.climate.split(",").forEach((climate) => {
          climates.add(climate.trim());
        });
      }
    });
    return Array.from(climates).sort();
  }, [planets]);

  const filteredPlanets = useMemo(() => {
    if (!planets) return [];

    return planets.filter((planet) => {
      const matchesSearch =
        !debouncedSearch.trim() ||
        planet.name.toLowerCase().includes(debouncedSearch.toLowerCase());

      const matchesTerrain =
        !terrainFilter ||
        (planet.terrain &&
          planet.terrain !== "unknown" &&
          planet.terrain.toLowerCase().includes(terrainFilter.toLowerCase()));

      const matchesClimate =
        !climateFilter ||
        (planet.climate &&
          planet.climate !== "unknown" &&
          planet.climate.toLowerCase().includes(climateFilter.toLowerCase()));

      return matchesSearch && matchesTerrain && matchesClimate;
    });
  }, [planets, debouncedSearch, terrainFilter, climateFilter]);

  if (isLoading) {
    return <SummarySkeleton />;
  }

  return (
    <S.Container>
      <S.Title>Coruscant Bank</S.Title>

      <S.PlanetsTitle>Planets</S.PlanetsTitle>

      <S.PlanetsFilterContainer>
        <PlanetSearch search={search} setSearch={setSearch} />

        <PlanetFilters
          terrainFilter={terrainFilter}
          setTerrainFilter={setTerrainFilter}
          climateFilter={climateFilter}
          setClimateFilter={setClimateFilter}
          availableTerrains={availableTerrains}
          availableClimates={availableClimates}
        />

        {filteredPlanets && (
          <S.PlanetsCount>
            {`${filteredPlanets.length} ${
              filteredPlanets.length === 1 ? "planet" : "planets"
            } found`}
          </S.PlanetsCount>
        )}
      </S.PlanetsFilterContainer>

      <S.Divider />

      <S.PlanetsContainer>
        {filteredPlanets?.map((planet) => (
          <S.PlanetCard
            id={planet.id}
            key={planet.id}
            onClick={() => navigate(`/planet/${planet.id}`)}
          >
            <S.Text>{planet.name}</S.Text>
          </S.PlanetCard>
        ))}
      </S.PlanetsContainer>
      {filteredPlanets?.length === 0 && (
        <S.Text $align="center">No planets found</S.Text>
      )}
    </S.Container>
  );
};

export default Summary;
