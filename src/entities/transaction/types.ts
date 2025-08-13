export type Currency = "ICS" | "GCS";
export type Status = "completed" | "blocked" | "inProgress";

export interface Transaction {
  id: string;
  user: string;
  currency: Currency;
  amount: number;
  date: string;
  status: Status;
}

export interface TransactionsResponse {
  transactions: Transaction[];
}

export interface TransactionWithConversion extends Transaction {
  convertedAmount: number;
  convertedCurrency: Currency;
}

export interface TransactionTotals {
  ics: {
    total: number;
    count: number;
  };
  gcs: {
    total: number;
    count: number;
  };
}
