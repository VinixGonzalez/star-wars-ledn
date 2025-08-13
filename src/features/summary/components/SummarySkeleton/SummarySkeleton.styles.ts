import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const SkeletonBase = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s infinite;
  border-radius: ${({ theme }) => theme.radii.sm};
`;

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
`;

export const Title = styled(SkeletonBase)`
  height: 48px;
  width: 300px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const PlanetsTitle = styled(SkeletonBase)`
  height: 32px;
  width: 150px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

export const PlanetsFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const SearchSkeleton = styled(SkeletonBase)`
  height: 40px;
  width: 250px;
`;

export const FiltersSkeleton = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const CountSkeleton = styled(SkeletonBase)`
  height: 20px;
  width: 120px;
`;

export const Divider = styled(SkeletonBase)`
  height: 1px;
  width: 100%;
  margin: ${({ theme }) => theme.spacing.xl} 0;
`;

export const PlanetsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.md};
`;

export const PlanetCardSkeleton = styled(SkeletonBase)`
  height: 80px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.md};
`;
