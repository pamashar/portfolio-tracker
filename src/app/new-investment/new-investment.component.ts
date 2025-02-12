import { Component, EventEmitter, Output } from '@angular/core';
import { STOCKS } from '../../data';

@Component({
  selector: 'app-new-investment',
  imports: [],
  templateUrl: './new-investment.component.html',
  styleUrl: './new-investment.component.scss'
})
export class NewInvestmentComponent {
  @Output() cancel = new EventEmitter<void>();

  stocks = STOCKS;

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    alert('submit')
  }
}
