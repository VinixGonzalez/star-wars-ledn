import * as S from "./SkeletonLoader.styles";

interface SkeletonLoaderProps {
  isLoadingUsers: boolean;
  isLoadingTransactions: boolean;
}

export const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  isLoadingUsers,
  isLoadingTransactions,
}) => {
  if (!isLoadingUsers && !isLoadingTransactions) {
    return null;
  }

  return (
    <S.SkeletonContainer>
      <S.SkeletonFilters>
        <S.SkeletonFilterGroup>
          <S.SkeletonBox $height="16px" $width="80px" />
          <S.SkeletonBox $height="40px" />
        </S.SkeletonFilterGroup>
      </S.SkeletonFilters>

      <S.SkeletonTransactionSummary>
        <S.SkeletonSummaryRow>
          <S.SkeletonBox $height="20px" $width="120px" />
          <S.SkeletonBox $height="20px" $width="80px" />
        </S.SkeletonSummaryRow>
        <S.SkeletonSummaryRow>
          <S.SkeletonBox $height="20px" $width="100px" />
          <S.SkeletonBox $height="20px" $width="60px" />
        </S.SkeletonSummaryRow>
        <S.SkeletonSummaryRow>
          <S.SkeletonBox $height="20px" $width="140px" />
          <S.SkeletonBox $height="20px" $width="90px" />
        </S.SkeletonSummaryRow>
      </S.SkeletonTransactionSummary>

      <S.SkeletonExchangeRate>
        <S.SkeletonBox $height="18px" $width="100px" />
        <S.SkeletonBox $height="16px" $width="150px" />
      </S.SkeletonExchangeRate>

      <S.SkeletonFilters>
        <S.SkeletonFilterGroup>
          <S.SkeletonBox $height="16px" $width="100px" />
          <S.SkeletonBox $height="40px" />
        </S.SkeletonFilterGroup>
        <S.SkeletonFilterGroup>
          <S.SkeletonBox $height="16px" $width="80px" />
          <S.SkeletonBox $height="40px" />
        </S.SkeletonFilterGroup>
      </S.SkeletonFilters>

      <S.SkeletonTable>
        <S.SkeletonTableHeader>
          <S.SkeletonBox $height="20px" />
          <S.SkeletonBox $height="20px" />
          <S.SkeletonBox $height="20px" />
          <S.SkeletonBox $height="20px" />
          <S.SkeletonBox $height="20px" />
        </S.SkeletonTableHeader>
        {[...Array(5)].map((_, index) => (
          <S.SkeletonTableRow key={index}>
            <S.SkeletonBox $height="16px" />
            <S.SkeletonBox $height="16px" />
            <S.SkeletonBox $height="16px" />
            <S.SkeletonBox $height="16px" />
            <S.SkeletonBox $height="16px" />
          </S.SkeletonTableRow>
        ))}
      </S.SkeletonTable>

      <S.SkeletonCards>
        {[...Array(3)].map((_, index) => (
          <S.SkeletonCard key={index}>
            <S.SkeletonBox $height="18px" $width="80px" />
            <S.SkeletonBox $height="16px" $width="120px" />
            <S.SkeletonBox $height="16px" $width="100px" />
            <S.SkeletonBox $height="16px" $width="90px" />
          </S.SkeletonCard>
        ))}
      </S.SkeletonCards>
    </S.SkeletonContainer>
  );
};
