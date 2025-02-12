import { Component, EventEmitter, Input, Output, output  } from '@angular/core';
import type { Portfolio } from '@/types/portfolio';

@Component({
  selector: 'app-portfolio',
  imports: [],
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  @Input({ required: true }) portfolio!: Portfolio;
  @Input({ required: true }) isSelected!: boolean;
  @Output() select = new EventEmitter<Portfolio['id']>()

  onSelect() {
    this.select.emit(this.portfolio.id);
  }

}

