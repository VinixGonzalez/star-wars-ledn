import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
  max-width: 310px;

  @media (min-width: 768px) {
    width: auto;
    min-width: 200px;
    max-width: none;
  }
`;

export const SearchLabel = styled.label`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  color: ${({ theme }) => theme.colors.tertiary};
  text-shadow: 0 0 4px ${({ theme }) => theme.colors.tertiary};
  text-align: left;
`;

export const SearchInput = styled.input`
  padding: ${({ theme }) => theme.spacing.sm};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.radii.sm};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.tertiary};
  transition: all 0.3s ease;

  &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    opacity: 1;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg.tertiary};
    color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.bg.tertiary};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.tertiary};
  }
`;
