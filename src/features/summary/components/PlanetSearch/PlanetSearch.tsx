import * as S from "./PlanetSearch.styles";

interface PlanetSearchProps {
  search: string;
  setSearch: (search: string) => void;
}

export const PlanetSearch: React.FC<PlanetSearchProps> = ({
  search,
  setSearch,
}) => {
  return (
    <S.SearchContainer>
      <S.SearchLabel htmlFor="planet-search">Planet Search</S.SearchLabel>
      <S.SearchInput
        type="text"
        placeholder="Planet name..."
        id="planet-search"
        aria-label="Planet search"
        aria-describedby="planet-search-description"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </S.SearchContainer>
  );
};
