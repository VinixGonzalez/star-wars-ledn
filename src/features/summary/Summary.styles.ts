import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  text-shadow: 0 0 6px ${({ theme }) => theme.colors.tertiary};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export const PlanetsTitle = styled.h2`
  font-size: ${({ theme }) => theme.typography.fontSize.lg};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  text-shadow: 0 0 6px ${({ theme }) => theme.colors.tertiary};
  text-align: center;

  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.typography.fontSize.xl};
  }
`;

export const PlanetsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Text = styled.p<{
  $align?: "center" | "left" | "right";
  $size?: "xs" | "sm" | "md" | "lg" | "xl";
}>`
  font-size: ${({ theme, $size = "md" }) => theme.typography.fontSize[$size]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.tertiary};
  text-align: ${({ $align = "left" }) => $align};
`;

export const PlanetCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  max-width: 310px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.xl};

  box-shadow: 0 0 6px ${({ theme }) => theme.colors.tertiary};

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.tertiary};
    color: ${({ theme }) => theme.colors.secondary};
    transition: all 0.8s ease;
    transform: scale(1.1);
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.bg.tertiary};

    ${Text} {
      color: ${({ theme }) => theme.colors.secondary};
      transform: scale(1.5);
      transition: all 0.8s ease;
      text-shadow: 0 0 6px ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const PlanetsFilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    gap: ${({ theme }) => theme.spacing.xl};
    max-width: 900px;
    margin: 0 auto;
  }
`;

export const PlanetsFilterLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.tertiary};
  text-align: left;

  @media (min-width: 768px) {
    text-align: center;
  }
`;

export const Divider = styled.hr`
  width: 30%;
  margin: 18px auto;
  background-color: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.tertiary};
  border: none;
  height: 1px;
`;

export const PlanetsCount = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  text-shadow: 0 0 2px ${({ theme }) => theme.colors.tertiary};
  text-align: center;
  width: 100%;
  margin: 0;

  @media (min-width: 768px) {
    width: 100%;
    text-align: center;
    order: 3;
  }
`;
