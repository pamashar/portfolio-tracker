import { Component, computed, Input } from '@angular/core';

import type { Investment, Stock } from '@/types/portfolio';

import { STOCKS } from '../../data';
import { convertToDisplay } from '@/utils/price';

@Component({
  selector: 'app-investment',
  imports: [],
  standalone: true,
  templateUrl: './investment.component.html',
  styleUrl: './investment.component.scss'
})
export class InvestmentComponent {
  @Input({ required: true }) investment!: Investment;

  quantityDisplay = computed(() => this.investment.quantity);
  averagePriceDisplay = computed(
    () => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(convertToDisplay(this.investment.averagePrice))
  )

  get stock() {
    return  STOCKS.find((s: Stock) => {
      return s.id === this.investment.stockId
    });
  }
  get imagePath() {
    if (!this.stock) return;
    return `assets/stocks/${this.stock.name}.svg`;
  }

}
