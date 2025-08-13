import styled from "styled-components";

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;
  max-width: 310px;

  @media (min-width: 768px) {
    flex-direction: row;
    width: auto;
    gap: ${({ theme }) => theme.spacing.lg};
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
    min-width: 150px;
  }
`;

export const FilterLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.tertiary};
  text-align: left;
`;

export const FilterSelect = styled.select`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.tertiary};
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.bg.tertiary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.tertiary};
  }

  option {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.tertiary};
  }
`;
