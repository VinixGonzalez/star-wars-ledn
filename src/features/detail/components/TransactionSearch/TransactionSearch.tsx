import { Status } from "entities/transaction";
import * as S from "./TransactionSearch.styles";

interface TransactionSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: Status | "all";
  onStatusFilterChange: (status: Status | "all") => void;
}

export const TransactionSearch = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusFilterChange,
}: TransactionSearchProps) => {
  const hasActiveFilters = searchTerm || statusFilter !== "all";

  return (
    <S.Container>
      <S.SearchSection>
        <S.SearchLabel>Search Transactions:</S.SearchLabel>
        <S.SearchInput
          type="text"
          placeholder="Search by transaction ID..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        {searchTerm && (
          <S.ClearButton onClick={() => onSearchChange("")}>✕</S.ClearButton>
        )}
      </S.SearchSection>

      <S.FilterSection>
        <S.FilterLabel>Filter by Status:</S.FilterLabel>
        <S.StatusButtons>
          <S.StatusButton
            $active={statusFilter === "all"}
            onClick={() => onStatusFilterChange("all")}
          >
            All
          </S.StatusButton>
          <S.StatusButton
            $active={statusFilter === "completed"}
            onClick={() => onStatusFilterChange("completed")}
          >
            Completed
          </S.StatusButton>
          <S.StatusButton
            $active={statusFilter === "blocked"}
            onClick={() => onStatusFilterChange("blocked")}
          >
            Blocked
          </S.StatusButton>
          <S.StatusButton
            $active={statusFilter === "inProgress"}
            onClick={() => onStatusFilterChange("inProgress")}
          >
            In Progress
          </S.StatusButton>
        </S.StatusButtons>
      </S.FilterSection>

      {hasActiveFilters && (
        <S.ActiveFiltersSummary>
          <S.ActiveFiltersLabel>Active Filters:</S.ActiveFiltersLabel>
          <S.ActiveFiltersList>
            {searchTerm && (
              <S.FilterChip>
                Search: "{searchTerm}"
                <S.RemoveFilterButton onClick={() => onSearchChange("")}>
                  ✕
                </S.RemoveFilterButton>
              </S.FilterChip>
            )}
            {statusFilter !== "all" && (
              <S.FilterChip>
                Status: {statusFilter}
                <S.RemoveFilterButton
                  onClick={() => onStatusFilterChange("all")}
                >
                  ✕
                </S.RemoveFilterButton>
              </S.FilterChip>
            )}
          </S.ActiveFiltersList>
        </S.ActiveFiltersSummary>
      )}
    </S.Container>
  );
};
