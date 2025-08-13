import * as S from "./PlanetInfoSkeleton.styles";

export const PlanetInfoSkeleton: React.FC = () => {
  return (
    <S.SkeletonContainer>
      <S.SkeletonTitle />

      <S.SkeletonHeader>
        <S.SkeletonHeaderAction />
        <S.SkeletonHeaderAction />
      </S.SkeletonHeader>

      <S.SkeletonPlanetInfo>
        <S.SkeletonPlanetInfoGrid>
          {[...Array(8)].map((_, index) => (
            <S.SkeletonPlanetInfoItem key={index}>
              <S.SkeletonBox $height="16px" $width="80px" />
              <S.SkeletonBox $height="20px" $width="100px" />
            </S.SkeletonPlanetInfoItem>
          ))}
        </S.SkeletonPlanetInfoGrid>
      </S.SkeletonPlanetInfo>
    </S.SkeletonContainer>
  );
};
