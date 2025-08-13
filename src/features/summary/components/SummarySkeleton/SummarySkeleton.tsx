import * as S from "./SummarySkeleton.styles";

export const SummarySkeleton = () => {
  return (
    <S.Container>
      <S.Title />
      <S.PlanetsTitle />

      <S.PlanetsFilterContainer>
        <S.SearchSkeleton />
        <S.FiltersSkeleton />
        <S.CountSkeleton />
      </S.PlanetsFilterContainer>

      <S.Divider />

      <S.PlanetsContainer>
        {[...Array(8)].map((_, index) => (
          <S.PlanetCardSkeleton key={index} />
        ))}
      </S.PlanetsContainer>
    </S.Container>
  );
};
