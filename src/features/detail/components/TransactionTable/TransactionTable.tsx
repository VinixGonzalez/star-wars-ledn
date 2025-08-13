import { TransactionWithConversion } from "entities/transaction";
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import * as S from "./TransactionTable.styles";

interface TransactionTableProps {
  transactions: TransactionWithConversion[];
  currentPage: number;
  transactionsPerPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  sortBy: string;
  sortDirection: "asc" | "desc";
  onSort: (field: string) => void;
}

export const TransactionTable = ({
  transactions,
  currentPage,
  transactionsPerPage,
  totalPages,
  onPageChange,
  sortBy,
  sortDirection,
  onSort,
}: TransactionTableProps) => {
  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  const getSortIcon = (field: string) => {
    if (sortBy !== field) return null;
    return sortDirection === "asc" ? <HiChevronUp /> : <HiChevronDown />;
  };

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <S.SortableHeader onClick={() => onSort("id")}>
              Transaction ID {getSortIcon("id")}
            </S.SortableHeader>
            <S.SortableHeader onClick={() => onSort("amount")}>
              Amount {getSortIcon("amount")}
            </S.SortableHeader>
            <S.SortableHeader onClick={() => onSort("currency")}>
              Currency {getSortIcon("currency")}
            </S.SortableHeader>
            <S.SortableHeader onClick={() => onSort("status")}>
              Status {getSortIcon("status")}
            </S.SortableHeader>
            <S.SortableHeader onClick={() => onSort("date")}>
              Date {getSortIcon("date")}
            </S.SortableHeader>
          </tr>
        </thead>
        <tbody>
          {currentTransactions.map((transaction) => (
            <S.TableRow key={transaction.id}>
              <S.Cell>{transaction.id}</S.Cell>
              <S.Cell>
                <S.AmountContainer>
                  <S.Amount>
                    {transaction.amount.toFixed(2)} {transaction.currency}
                  </S.Amount>
                  {transaction.convertedAmount && (
                    <S.Amount>
                      = {transaction.convertedAmount.toFixed(2)}{" "}
                      {transaction.convertedCurrency}
                    </S.Amount>
                  )}
                </S.AmountContainer>
              </S.Cell>
              <S.Cell>
                <S.CurrencyBadge currency={transaction.currency}>
                  {transaction.currency}
                </S.CurrencyBadge>
              </S.Cell>
              <S.Cell>
                <S.StatusBadge status={transaction.status}>
                  {transaction.status}
                </S.StatusBadge>
              </S.Cell>
              <S.Cell>{new Date(transaction.date).toLocaleDateString()}</S.Cell>
            </S.TableRow>
          ))}
        </tbody>
      </S.Table>

      {totalPages > 1 && (
        <S.Pagination>
          <S.PaginationInfo>
            Showing {startIndex + 1}-{Math.min(endIndex, transactions.length)}{" "}
            of {transactions.length} transactions
          </S.PaginationInfo>

          <S.PaginationControls>
            <S.PaginationButton
              onClick={() => onPageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </S.PaginationButton>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <S.PaginationButton
                key={page}
                onClick={() => onPageChange(page)}
                $active={page === currentPage}
              >
                {page}
              </S.PaginationButton>
            ))}

            <S.PaginationButton
              onClick={() => onPageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </S.PaginationButton>
          </S.PaginationControls>
        </S.Pagination>
      )}
    </S.Container>
  );
};
