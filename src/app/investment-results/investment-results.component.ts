import { Component, Input, signal } from '@angular/core';
import { OutputObject } from '../output.model';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  @Input({required:true}) resultsList!:OutputObject[]

}
