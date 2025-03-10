import type { Transaction, Stock, Investment, Portfolio } from "@/types/portfolio";

function filterTransactionsByPortfolio(
  transactions: Transaction[],
  portfolioId: Portfolio['id'],
): Transaction[] {
  return transactions.filter((t: Transaction) => t.portfolioId === portfolioId);
};

function filterTransactionsByStock(
  transactions: Transaction[],
  stockId: Stock['id'],
): Transaction[] {
  return transactions.filter((t: Transaction) => t.stockName === stockId);
};

function combineTransactions(
  transactions: Transaction[],
  stockId: Stock['id'],
) {
  let result: Partial<Record<Stock['name'], Investment[]>> = {};
  const transactionsByStock: Partial<Record<Stock['name'], Omit<Investment, 'averagePrice'>[]>> = {};

  for (let transaction of transactions) {
    transactionsByStock[transaction['stockName']] = [
      ...(transactionsByStock[transaction['stockName']] || []),
      transaction
    ];
  }

  for (let transactionByStock in transactionsByStock) {

  }
};

export {
  combineTransactions,
  filterTransactionsByPortfolio,
  filterTransactionsByStock,
}
