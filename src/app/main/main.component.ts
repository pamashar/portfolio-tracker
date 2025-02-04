import { Component } from '@angular/core';
import { PortfoliosComponent } from '../portfolios/portfolios.component';
import { PortfolioDataComponent } from '../portfolio-data/portfolio-data.component';

@Component({
  selector: 'app-main',
  imports: [PortfoliosComponent, PortfolioDataComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
