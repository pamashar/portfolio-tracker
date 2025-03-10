import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTransaction, Portfolio, Stock, Transaction } from '@/types/portfolio';

import { STOCKS } from '../../data';
import { roundTo } from '@/utils/numbers';

@Component({
  selector: 'app-new-transaction',
  imports: [FormsModule],
  templateUrl: './new-investment.component.html',
  styleUrl: './new-investment.component.scss'
})
export class NewTransactionComponent {
  @Input({ required: true }) portfolio!: Portfolio;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTransaction>();

  stockIdValue: Transaction['stockId']= STOCKS[0].id;
  amountValue: Transaction['amount'] = 0;
  priceValue: Transaction['price'] = 0;
  now = new Date(Date.now());
  dateValue = '';

  stocks = STOCKS;

  get isCorrect(): boolean {
    return Boolean( this.stockIdValue && this.amountValue && this.priceValue && this.dateValue);
  }

  get stock(): Stock | undefined {
    return this.stocks.find((s: Stock) => s.id === this.stockIdValue);
  }

  get totalValue() {
    return roundTo(this.amountValue * this.priceValue, 2);
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (!this.portfolio?.id) return;
    if (!this.stock?.id) return;

    this.add.emit({
      portfolioId: this.portfolio.id,
      stockId: this.stock.id,
      amount: this.amountValue,
      price: this.priceValue,
      date: this.dateValue,
    });
  }
}
