import { Component } from '@angular/core';
import { PORTFOLIOS, type Portfolio } from '../../data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-portfolios',
  standalone: true,
  imports: [NgFor],
  templateUrl: './portfolios.component.html',
  styleUrl: './portfolios.component.scss'
})

export class PortfoliosComponent {
  portfolios = PORTFOLIOS
  selectedPortfolio = PORTFOLIOS[0]

  onSelect(portfolio: Portfolio) {
    this.selectedPortfolio = portfolio
    console.log(portfolio)
  }
}

