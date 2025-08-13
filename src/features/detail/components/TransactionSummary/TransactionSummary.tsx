import * as S from "./TransactionSummary.styles";

interface TransactionSummaryProps {
  totalTransactions: number;
  icsCount: number;
  gcsCount: number;
  icsTotal: number;
  gcsTotal: number;
}

export const TransactionSummary = ({
  totalTransactions,
  icsCount,
  gcsCount,
  icsTotal,
  gcsTotal,
}: TransactionSummaryProps) => {
  return (
    <S.Container>
      <S.SummaryCard>
        <S.CardTitle>Total Transactions</S.CardTitle>
        <S.CardValue>{totalTransactions}</S.CardValue>
      </S.SummaryCard>

      <S.SummaryCard>
        <S.CardTitle>ICS Transactions</S.CardTitle>
        <S.CardValue>{icsCount}</S.CardValue>
        <S.CardSubtitle>{icsTotal.toFixed(2)} ICS</S.CardSubtitle>
      </S.SummaryCard>

      <S.SummaryCard>
        <S.CardTitle>GCS Transactions</S.CardTitle>
        <S.CardValue>{gcsCount}</S.CardValue>
        <S.CardSubtitle>{gcsTotal.toFixed(2)} GCS</S.CardSubtitle>
      </S.SummaryCard>
    </S.Container>
  );
};
