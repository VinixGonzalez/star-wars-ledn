import { TransactionWithConversion } from "entities/transaction";
import * as S from "./TransactionCards.styles";

interface TransactionCardsProps {
  transactions: TransactionWithConversion[];
  currentPage: number;
  transactionsPerPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const TransactionCards = ({
  transactions,
  currentPage,
  transactionsPerPage,
  totalPages,
  onPageChange,
}: TransactionCardsProps) => {
  const startIndex = (currentPage - 1) * transactionsPerPage;
  const endIndex = startIndex + transactionsPerPage;
  const currentTransactions = transactions.slice(startIndex, endIndex);

  return (
    <S.Container>
      <S.CardsGrid>
        {currentTransactions.map((transaction) => (
          <S.Card key={transaction.id}>
            <S.CardHeader>
              <S.TransactionId>#{transaction.id}</S.TransactionId>
              <S.StatusBadge status={transaction.status}>
                {transaction.status}
              </S.StatusBadge>
            </S.CardHeader>

            <S.CardBody>
              <S.AmountSection>
                <S.Amount>
                  {transaction.amount.toFixed(2)} {transaction.currency}
                </S.Amount>
                {transaction.convertedAmount && (
                  <S.Amount>
                    = {transaction.convertedAmount.toFixed(2)}{" "}
                    {transaction.convertedCurrency}
                  </S.Amount>
                )}
              </S.AmountSection>

              <S.CurrencySection>
                <S.CurrencyBadge currency={transaction.currency}>
                  {transaction.currency}
                </S.CurrencyBadge>
              </S.CurrencySection>

              <S.DateSection>
                <S.DateLabel>Date:</S.DateLabel>
                <S.DateValue>
                  {new Date(transaction.date).toLocaleDateString()}
                </S.DateValue>
              </S.DateSection>
            </S.CardBody>
          </S.Card>
        ))}
      </S.CardsGrid>

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

            <S.PageNumbers>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <S.PageButton
                    key={page}
                    onClick={() => onPageChange(page)}
                    $active={page === currentPage}
                  >
                    {page}
                  </S.PageButton>
                )
              )}
            </S.PageNumbers>

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
