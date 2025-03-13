import { Component, computed, Input } from '@angular/core';

import type { Stock, Transaction } from '@/types/portfolio';

import { STOCKS } from '../../data';
import { convertToDisplay } from '@/utils/price';
import { formatDate } from '@/utils/date';

@Component({
  selector: 'app-transaction',
  imports: [],
  standalone: true,
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  @Input({ required: true }) transaction!: Transaction;

  quantityDisplay = computed(() => this.transaction.quantity);
  priceDisplay = computed(
    () => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(convertToDisplay(this.transaction.price))
  )
  dateDisplay = computed(() => formatDate(new Date(this.transaction.date), 'dd-MM-yyyy HH:mm:ss'))

  get stock() {
    return  STOCKS.find((s: Stock) => {
      return s.id === this.transaction.stockId
    });
  }
  get imagePath() {
    if (!this.stock) return;
    return `assets/stocks/${this.stock.name}.svg`;
  }

}
