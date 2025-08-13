import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-wrap: wrap;
`;

export const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid
    ${({ theme, $isActive }) =>
      $isActive ? theme.colors.tertiary : theme.colors.secondary};
  background: ${({ theme, $isActive }) =>
    $isActive ? theme.colors.bg.tertiary : "transparent"};
  color: ${({ theme }) => theme.colors.secondary};
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.radii.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  letter-spacing: 1.5px;
`;
