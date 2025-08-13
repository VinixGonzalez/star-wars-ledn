import { useQuery } from "@tanstack/react-query";
import { Currency, TransactionWithConversion } from "entities/transaction";
import { useMemo } from "react";
import { exchangeApi, qk, transactionsApi } from "shared/api";

interface UseTransactionsOptions {
  userIds: string[];
  currencyFilter?: Currency | "all";
}

export const useTransactions = ({
  userIds,
  currencyFilter = "all",
}: UseTransactionsOptions) => {
  const {
    data: transactionsData,
    isLoading: isLoadingTransactions,
    error: transactionsError,
  } = useQuery({
    queryKey: qk.transactionsByUsers(userIds),
    queryFn: () => transactionsApi.getByUsers(userIds),
    enabled: userIds.length > 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
    refetchOnWindowFocus: false,
  });

  const {
    data: exchangeRateData,
    isLoading: isLoadingExchangeRate,
    error: exchangeRateError,
  } = useQuery({
    queryKey: qk.exchangeRate(),
    queryFn: exchangeApi.getRate,
    staleTime: 1 * 60 * 1000, // 1 minute
    refetchOnWindowFocus: false,
  });

  const processedTransactions = useMemo(() => {
    if (!transactionsData?.transactions || !exchangeRateData) return [];

    let filteredTransactions = transactionsData.transactions;

    if (currencyFilter !== "all") {
      filteredTransactions = filteredTransactions.filter(
        (transaction) => transaction.currency === currencyFilter
      );
    }

    const rate = parseFloat(exchangeRateData.rate);

    return filteredTransactions.map((transaction) => {
      let convertedAmount = 0;
      let convertedCurrency: Currency;

      if (transaction.currency === "ICS") {
        convertedAmount = transaction.amount * rate;
        convertedCurrency = "GCS";
      } else {
        convertedAmount = transaction.amount / rate;
        convertedCurrency = "ICS";
      }

      return {
        ...transaction,
        convertedAmount: +convertedAmount.toFixed(2),
        convertedCurrency,
      } as TransactionWithConversion;
    });
  }, [transactionsData?.transactions, exchangeRateData, currencyFilter]);

  const totals = useMemo(() => {
    if (!processedTransactions) {
      return {
        ics: {
          total: 0,
          count: 0,
        },
        gcs: {
          total: 0,
          count: 0,
        },
      };
    }

    const icsTransactions = processedTransactions.filter(
      (transaction) => transaction.currency === "ICS"
    );
    const gcsTransactions = processedTransactions.filter(
      (transaction) => transaction.currency === "GCS"
    );

    return {
      ics: {
        total: icsTransactions.reduce(
          (sum, transaction) => sum + transaction.amount,
          0
        ),
        count: icsTransactions.length,
      },
      gcs: {
        total: gcsTransactions.reduce(
          (sum, transaction) => sum + transaction.amount,
          0
        ),
        count: gcsTransactions.length,
      },
    };
  }, [processedTransactions]);

  return {
    transactions: processedTransactions,
    totals,
    exchangeRateData,
    isLoading: isLoadingTransactions || isLoadingExchangeRate,
    error: transactionsError || exchangeRateError,
  };
};
