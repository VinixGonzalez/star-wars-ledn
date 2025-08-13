import styled from "styled-components";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.tertiary};
  overflow: hidden;
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SortableHeader = styled.th`
  background: rgba(255, 255, 255, 0.1);
  padding: ${({ theme }) => theme.spacing.md};
  text-align: left;
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  cursor: pointer;
  transition: background-color 0.2s ease;
  user-select: none;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 1.2px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  svg {
    margin-left: 0.5rem;
    vertical-align: middle;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: rgba(255, 255, 255, 0.05);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Cell = styled.td`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  letter-spacing: 1.2px;
`;

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

export const Amount = styled.span`
  letter-spacing: 1.2px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const CurrencyBadge = styled.span<{ currency: string }>`
  background: ${({ currency }) =>
    currency === "ICS" ? "rgba(255, 193, 7, 0.2)" : "rgba(0, 123, 255, 0.2)"};
  color: ${({ currency, theme }) =>
    currency === "ICS" ? theme.colors.secondary : theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  letter-spacing: 1.2px;
  border: 1px solid
    ${({ currency }) =>
      currency === "ICS" ? "rgba(255, 193, 7, 0.3)" : "rgba(0, 123, 255, 0.3)"};
`;

export const StatusBadge = styled.span<{ status: string }>`
  background: ${({ status, theme }) => {
    switch (status) {
      case "completed":
        return theme.colors.status.bg.completed;
      case "blocked":
        return theme.colors.status.bg.blocked;
      case "inProgress":
        return theme.colors.status.bg.inProgress;
      default:
        return theme.colors.status.bg.default;
    }
  }};
  color: ${({ status, theme }) => {
    switch (status) {
      case "completed":
        return theme.colors.status.completed;
      case "blocked":
        return theme.colors.status.blocked;
      case "inProgress":
        return theme.colors.status.inProgress;
      default:
        return theme.colors.status.default;
    }
  }};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radii.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  text-transform: capitalize;
  border: 1px solid
    ${({ status, theme }) => {
      switch (status) {
        case "completed":
          return theme.colors.status.bg.completed;
        case "blocked":
          return theme.colors.status.bg.blocked;
        case "inProgress":
          return theme.colors.status.bg.inProgress;
        default:
          return theme.colors.status.bg.default;
      }
    }};
`;

export const Pagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(255, 255, 255, 0.05);
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0 0 6px ${({ theme }) => theme.colors.tertiary};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PaginationInfo = styled.span`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  letter-spacing: 1.2px;
`;

export const PaginationControls = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
  background: ${({ $active, theme }) =>
    $active ? theme.colors.secondary : "rgba(255, 255, 255, 0.1)"};
  color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.secondary};
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.secondary : "rgba(255, 255, 255, 0.2)"};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  cursor: pointer;
  transition: all 0.2s ease;
  min-width: 60px;

  &:hover:not(:disabled) {
    background: ${({ $active, theme }) =>
      $active ? theme.colors.secondary : "rgba(255, 255, 255, 0.2)"};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
