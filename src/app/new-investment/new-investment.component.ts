import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTransaction, Portfolio, Stock, Transaction } from '@/types/portfolio';

import { STOCKS } from '../../data';
import { roundTo } from '@/utils/numbers';
import { format } from '@/utils/date';
import { convertFromDisplay } from '@/utils/price';

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
  amountValue: Transaction['amount'] | '' = '';
  priceValue: Transaction['price'] | '' = '';
  now = new Date(Date.now());
  dateValue = '';

  stocks = STOCKS;

  ngOnInit() {
    this.dateValue = format(new Date(), 'yyyy-MM-dd')
  }

  get isCorrect(): boolean {
    return Boolean(this.stockIdValue && this.amountValue && this.priceValue && this.dateValue);
  }

  get stock(): Stock | undefined {
    return this.stocks.find((s: Stock) => s.id === this.stockIdValue);
  }

  get totalValue() {
    return roundTo((this.amountValue || 0) * (this.priceValue || 0), 2);
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (!this.portfolio?.id) return;
    if (!this.stock?.id) return;
    if (!this.amountValue) return;
    if (!this.priceValue) return;

    this.add.emit({
      portfolioId: this.portfolio.id,
      stockId: this.stock.id,
      amount: this.amountValue,
      price: convertFromDisplay(this.priceValue),
      date: this.dateValue,
    });
  }
}
