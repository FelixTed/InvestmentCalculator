import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { UserInputObject } from './user-input/input.model';
import { InvestmentResultsComponent } from './investment-results/investment-results.component';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { OutputObject } from './output.model';
import { calculateInvestmentResults } from '../investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {


}
