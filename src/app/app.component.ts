import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PortfoliosComponent } from './portfolios/portfolios.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, PortfoliosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'portfolio-tracker';
}
