import { Component,  } from '@angular/core';
import { NgClass } from '@angular/common';
import { PortfolioComponent } from '../portfolio/portfolio.component';
import { PortfolioDataComponent } from '../portfolio-data/portfolio-data.component';
import { PORTFOLIOS } from '../../data';
import type { Portfolio } from '@/types/portfolio';

@Component({
  selector:    'app-main',
  imports:     [NgClass, PortfolioComponent, PortfolioDataComponent],
  templateUrl: './main.component.html',
  standalone:  true,
  styleUrl:    './main.component.scss'
})
export class MainComponent {
  selectedPortfolio: Portfolio = PORTFOLIOS[0];

  portfolios: Portfolio[] = PORTFOLIOS;

  onSelectPortfolio(id: Portfolio['id']) {
    const portfolio = this.portfolios.find((p: Portfolio) => p.id === id);
    if (!portfolio) return;
    this.selectedPortfolio = portfolio;
  }

}
