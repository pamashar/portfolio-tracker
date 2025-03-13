import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NewTransaction, Portfolio, Stock, Transaction } from '@/types/portfolio';

import { STOCKS } from '../../data';
import { roundTo } from '@/utils/numbers';
import { formatDate } from '@/utils/date';
import { convertFromDisplay } from '@/utils/price';

@Component({
  selector: 'app-new-transaction',
  imports: [FormsModule],
  templateUrl: './new-transaction.component.html',
  styleUrl: './new-transaction.component.scss'
})
export class NewTransactionComponent {
  @Input({ required: true }) portfolio!: Portfolio;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTransaction>();

  stockIdValue: Transaction['stockId']= STOCKS[0].id;
  quantityValue: Transaction['quantity'] | '' = '';
  priceValue: Transaction['price'] | '' = '';
  now = new Date(Date.now());
  dateValue = '';

  stocks = STOCKS;

  ngOnInit() {
    const dateStr = formatDate(new Date(), 'yyyy-MM-dd') + 'T' + formatDate(new Date(), 'HH:mm:ss');
    this.dateValue = dateStr;
  }

  get isCorrect(): boolean {
    return Boolean(this.stockIdValue && this.quantityValue && typeof this.priceValue === 'number' && this.dateValue);
  }

  get stock(): Stock | undefined {
    return this.stocks.find((s: Stock) => s.id === this.stockIdValue);
  }

  get totalValue() {
    return roundTo((this.quantityValue || 0) * (this.priceValue || 0), 2);
  }

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    if (!this.portfolio?.id) return;
    if (!this.stock?.id) return;
    if (!this.quantityValue) return;
    if (typeof this.priceValue !== 'number') return;

    this.add.emit({
      portfolioId: this.portfolio.id,
      stockId: this.stock.id,
      quantity: this.quantityValue,
      price: convertFromDisplay(this.priceValue),
      date: formatDate(new Date(this.dateValue)),
    });
  }
}
