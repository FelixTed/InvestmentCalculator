import { Component, signal } from '@angular/core';
import { UserInputObject } from './input.model';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  constructor( public investmentService:InvestmentService) {}

  initialInvestment = signal(0);
  annualInvestment = signal(0);
  expectedReturn = signal(5);
  duration = signal(10);

  onSubmit(){
    this.investmentService.calculateInvestmentResults(
      this.initialInvestment(),
      this.annualInvestment(),
      this.duration(),
      this.expectedReturn()
    )
    this.initialInvestment.set(0)
    this.annualInvestment.set(0)
    this.expectedReturn.set(5)
    this.duration.set(10)
  }

}
