import { Component, input, Input, signal, inject } from '@angular/core';
import { OutputObject } from '../output.model';
import { DecimalPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  resultsList = this.investmentService.resultData.asReadonly()
}
