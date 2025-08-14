import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.lg};
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.md};
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.lg};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(4, 1fr);
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.radii.md};
  padding: ${({ theme }) => theme.spacing.md};
  transition: all 0.2s ease;
  box-sizing: border-box;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-height: 140px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    min-height: 160px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  padding-bottom: ${({ theme }) => theme.spacing.sm};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const TransactionId = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 0.5px;
`;

export const StatusBadge = styled.span<{ status: string }>`
  background: ${({ status }) => {
    switch (status) {
      case "completed":
        return "rgba(34, 197, 94, 0.2)";
      case "blocked":
        return "rgba(239, 68, 68, 0.2)";
      case "inProgress":
        return "rgba(59, 130, 246, 0.2)";
      default:
        return "rgba(255, 255, 255, 0.1)";
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case "completed":
        return "#22c55e";
      case "blocked":
        return "#ef4444";
      case "inProgress":
        return "#3b82f6";
      default:
        return theme.colors.secondary;
    }
  }};
  border: 1px solid
    ${({ status }) => {
      switch (status) {
        case "completed":
          return "rgba(34, 197, 94, 0.3)";
        case "blocked":
          return "rgba(239, 68, 68, 0.3)";
        case "inProgress":
          return "rgba(59, 130, 246, 0.3)";
        default:
          return "rgba(255, 255, 255, 0.2)";
      }
    }};
  border-radius: ${({ theme }) => theme.radii.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
  white-space: nowrap;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const AmountSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const Amount = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
  letter-spacing: 1.2px;
`;

export const CurrencySection = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const CurrencyBadge = styled.span<{ currency: string }>`
  background: ${({ currency }) =>
    currency === "ICS" ? "rgba(255, 193, 7, 0.3)" : "rgba(59, 130, 246, 0.3)"};
  color: ${({ currency, theme }) =>
    currency === "ICS" ? theme.colors.tertiary : theme.colors.info};
  border: 1px solid
    ${({ currency }) =>
      currency === "ICS"
        ? "rgba(255, 193, 7, 0.3)"
        : "rgba(59, 130, 246, 0.3)"};
  border-radius: ${({ theme }) => theme.radii.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-align: center;
  min-width: 60px;
`;

export const DateSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${({ theme }) => theme.spacing.sm};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const DateLabel = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DateValue = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const PaginationInfo = styled.div`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-align: center;
`;

export const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

export const PaginationButton = styled.button`
  background: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 80px;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 100px;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.lg};
  }
`;

export const PageNumbers = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

export const PageButton = styled.button<{ $active: boolean }>`
  background: ${({ $active, theme }) =>
    $active ? theme.colors.tertiary : "rgba(255, 255, 255, 0.1)"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.secondary};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.tertiary : "rgba(255, 255, 255, 0.2)"};
  border-radius: ${({ theme }) => theme.radii.xs};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.tertiary : "rgba(255, 255, 255, 0.2)"};
    transform: translateY(-1px);
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: 44px;
    min-height: 44px;
    font-size: ${({ theme }) => theme.typography.fontSize.md};
  }
`;
