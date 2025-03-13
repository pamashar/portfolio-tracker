import { Component, Input } from '@angular/core';
import type { Portfolio, Investment, NewTransaction, Stock, Transaction } from '@/types/portfolio'
import { InvestmentComponent } from '../investment/investment.component';
import { NewTransactionComponent } from '../new-investment/new-investment.component';
import { PORTFOLIOS, STOCKS } from '../../data';
import { filterTransactionsByPortfolio } from '@/utils/investments';

@Component({
  selector: 'app-portfolio-data',
  imports: [InvestmentComponent, NewTransactionComponent],
  standalone: true,
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
      amount: 1,
      price: 5000000,
      date: new Date('01-01-2025').toLocaleString(),
    },
    {
      id: crypto.randomUUID(),
      portfolioId: PORTFOLIOS[0].id,
      stockId: STOCKS[1].id,
      stockName: "ETH",
      amount: 0.123456789012345678,
      price: 340000,
      date: new Date('01-01-2025').toLocaleString(),
    },
    {
      id: crypto.randomUUID(),
      portfolioId: PORTFOLIOS[0].id,
      stockId: STOCKS[2].id,
      stockName: "SOL",
      amount: 1.71,
      price: 16500,
      date: new Date('01-01-2025').toLocaleString(),
    },
    {
      id: crypto.randomUUID(),
      portfolioId: PORTFOLIOS[0].id,
      stockId: STOCKS[3].id,
      stockName: "LTC",
      amount: 1.6,
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
          amount: acc.amount += cur.amount,
        }
      }, { price: 0, amount: 0 })

      const investment: Investment = {
        amount: sum.amount,
        averagePrice: sum.price/sum.amount,
        portfolioId: filteredByStock[0].portfolioId,
        stockName: filteredByStock[0].stockName,
        stockId: filteredByStock[0].stockId,
      }

      result.push(investment)
    }

      console.log(combinedByStock.BTC);
    return result;
  }

  showNewTransaction() {
    this.isNewTransaction = true;
  }
  cancel() {
    this.isNewTransaction = false;
  }

}
