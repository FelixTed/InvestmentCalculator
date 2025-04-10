import { Component, EventEmitter, Output } from '@angular/core';
import { UserInputObject } from './input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() newData = new EventEmitter<UserInputObject>();

  initialInvestment = 0;
  annualInvestment = 0;
  expectedReturn = 0;
  duration = 0;

}
