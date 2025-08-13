import * as S from "./PlanetFilters.styles";

interface PlanetFiltersProps {
  terrainFilter: string;
  setTerrainFilter: (value: string) => void;
  climateFilter: string;
  setClimateFilter: (value: string) => void;
  availableTerrains: string[];
  availableClimates: string[];
}

export const PlanetFilters: React.FC<PlanetFiltersProps> = ({
  terrainFilter,
  setTerrainFilter,
  climateFilter,
  setClimateFilter,
  availableTerrains,
  availableClimates,
}) => {
  return (
    <S.FiltersContainer>
      <S.FilterGroup>
        <S.FilterLabel htmlFor="terrain-filter">Terrain Filter</S.FilterLabel>
        <S.FilterSelect
          id="terrain-filter"
          value={terrainFilter}
          onChange={(e) => setTerrainFilter(e.target.value)}
        >
          <option value="">All Terrains</option>
          {availableTerrains.map((terrain) => (
            <option key={terrain} value={terrain}>
              {terrain}
            </option>
          ))}
        </S.FilterSelect>
      </S.FilterGroup>

      <S.FilterGroup>
        <S.FilterLabel htmlFor="climate-filter">Climate Filter</S.FilterLabel>
        <S.FilterSelect
          id="climate-filter"
          value={climateFilter}
          onChange={(e) => setClimateFilter(e.target.value)}
        >
          <option value="">All Climates</option>
          {availableClimates.map((climate) => (
            <option key={climate} value={climate}>
              {climate}
            </option>
          ))}
        </S.FilterSelect>
      </S.FilterGroup>
    </S.FiltersContainer>
  );
};
