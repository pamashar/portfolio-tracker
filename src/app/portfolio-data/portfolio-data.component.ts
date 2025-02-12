import { Component, Input } from '@angular/core';
import type { Portfolio, Investment } from '@/types/portfolio'
import { INVESTMENTS } from '../../data';
import { InvestmentComponent } from '../investment/investment.component';
import { NewInvestmentComponent } from '../new-investment/new-investment.component';

@Component({
  selector: 'app-portfolio-data',
  imports: [InvestmentComponent, NewInvestmentComponent],
  standalone: true,
  templateUrl: './portfolio-data.component.html',
  styleUrl: './portfolio-data.component.scss'
})
export class PortfolioDataComponent {
  @Input() selectedPortfolioId?: Portfolio["id"];

  isNewInvestment = false;

  get items() {
    return INVESTMENTS.filter((p: Investment) => p.portfolioId === this.selectedPortfolioId);
  }

  showNewInvestment() {
    this.isNewInvestment = true;
  }
  cancel() {
    this.isNewInvestment = false;
  }

}
