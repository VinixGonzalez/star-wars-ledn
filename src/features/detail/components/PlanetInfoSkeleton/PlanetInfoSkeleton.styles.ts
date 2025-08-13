import styled from "styled-components";

export const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SkeletonBox = styled.div<{
  $width?: string;
  $height?: string;
  $margin?: string;
}>`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.1) 25%,
    rgba(255, 255, 255, 0.2) 50%,
    rgba(255, 255, 255, 0.1) 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: ${({ theme }) => theme.radii.sm};
  width: ${({ $width }) => $width || "100%"};
  height: ${({ $height }) => $height || "20px"};
  margin: ${({ $margin }) => $margin || "0"};

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export const SkeletonTitle = styled.div`
  width: 200px;
  height: 32px;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (min-width: 768px) {
    width: 300px;
    height: 40px;
  }
`;

export const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const SkeletonHeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 120px;
  height: 24px;
`;

export const SkeletonPlanetInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: rgba(255, 255, 255, 0.05);

  box-shadow: 0 0 6px ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: 640px) {
    padding: ${({ theme }) => theme.spacing.lg};
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const SkeletonPlanetInfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const SkeletonPlanetInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.sm};
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: ${({ theme }) => theme.radii.sm};
  min-height: 70px;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};

  @media (min-width: 640px) {
    padding: ${({ theme }) => theme.spacing.md};
    min-height: 80px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: ${({ theme }) => theme.spacing.lg};
    min-height: 100px;
  }
`;
