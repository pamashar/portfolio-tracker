import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { Portfolio, Investment, NewTransaction, Stock, Transaction } from '@/types/portfolio'
import { InvestmentComponent } from '../investment/investment.component';
import { NewTransactionComponent } from '../new-transaction/new-transaction.component';
import { PORTFOLIOS, STOCKS } from '../../data';
import { filterTransactionsByPortfolio } from '@/utils/investments';
import { TransactionComponent } from '../transaction/transaction.component';

@Component({
  selector: 'app-portfolio-data',
  imports: [TransactionComponent, InvestmentComponent, NewTransactionComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './portfolio-data.component.html',
  styleUrl: './portfolio-data.component.scss'
})
export class PortfolioDataComponent {
  @Input() portfolio?: Portfolio;
  isNewTransaction = false;

  TRANSACTIONS: Transaction[] = [
    {
      id: crypto.randomUUID(),
      portfolioId: PORTFOLIOS[0].id,
      stockId: STOCKS[0].id,
      stockName: "BTC",
      quantity: 1,
      price: 5000000,
      date: new Date('01-01-2025').toLocaleString(),
    },
    {
      id: crypto.randomUUID(),
      portfolioId: PORTFOLIOS[0].id,
      stockId: STOCKS[1].id,
      stockName: "ETH",
      quantity: 0.123456789012345678,
      price: 340000,
      date: new Date('01-01-2025').toLocaleString(),
    },
    {
      id: crypto.randomUUID(),
      portfolioId: PORTFOLIOS[0].id,
      stockId: STOCKS[2].id,
      stockName: "SOL",
      quantity: 1.71,
      price: 16500,
      date: new Date('01-01-2025').toLocaleString(),
    },
    {
      id: crypto.randomUUID(),
      portfolioId: PORTFOLIOS[0].id,
      stockId: STOCKS[3].id,
      stockName: "LTC",
      quantity: 1.6,
      price: 8500,
      date: new Date('01-01-2025').toLocaleString(),
    },
  ]

  addTransaction(newTransaction: NewTransaction) {
    const stock = STOCKS.find((s: Stock) => s.id === newTransaction.stockId);
    if (!stock) return;

    this.TRANSACTIONS.push({
      id: crypto.randomUUID(),
      stockName: stock.name,
      ...newTransaction,
    })
    this.isNewTransaction = false;
  }

  get investments(): Investment[] {
    if (!this.portfolio?.id) return [];
    const filteredByPortfolio: Transaction[] = filterTransactionsByPortfolio(this.TRANSACTIONS, this.portfolio?.id);
    const combinedByStock: Partial<Record<Stock['name'], Transaction[]>> = {};
    const result: Investment[] = [];

    for (let transaction of filteredByPortfolio) {
      combinedByStock[transaction['stockName']] = [
        ...(combinedByStock[transaction['stockName']] || []),
        transaction,
      ]
    }

    for (let stockName in combinedByStock) { // FIX executes every time page updated
      const filteredByStock = combinedByStock[stockName as Transaction['stockName']] // TODO
      if (!filteredByStock) continue;

      const sum = filteredByStock.reduce((acc, cur) => {
        return {
          price: acc.price += cur.price,
          quantity: acc.quantity += cur.quantity,
        }
      }, { price: 0, quantity: 0 })

      const investment: Investment = {
        id: crypto.randomUUID(),
        quantity: sum.quantity,
        averagePrice: sum.price/sum.quantity,
        portfolioId: filteredByStock[0].portfolioId,
        stockName: filteredByStock[0].stockName,
        stockId: filteredByStock[0].stockId,
      }

      result.push(investment)
    }

    return result;
  }

  showNewTransaction() {
    this.isNewTransaction = true;
  }
  cancel() {
    this.isNewTransaction = false;
  }

}
