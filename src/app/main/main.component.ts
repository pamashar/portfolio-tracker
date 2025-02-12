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
  selectedPortfolioId?: Portfolio['id'];

  portfolios: Portfolio[] = PORTFOLIOS;

  onSelectPortfolio(id: Portfolio['id']) {
    this.selectedPortfolioId = id;
  }

}
