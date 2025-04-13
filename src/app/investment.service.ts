import { Injectable, signal } from "@angular/core";
import type { OutputObject } from "./output.model";
import { single } from "rxjs";

@Injectable({providedIn: 'root'})
export class InvestmentService{
    resultData = signal<OutputObject[]>([])

    calculateInvestmentResults(initialInvestment:number,annualInvestment:number, duration:number, expectedReturn:number) {
      const annualData: OutputObject[] = [];
      let investmentValue = initialInvestment;
    
      for (let i = 0; i < duration; i++) {
        const year = i + 1;
        const interestEarnedInYear = investmentValue * (expectedReturn / 100);
        investmentValue += interestEarnedInYear + annualInvestment;
        const totalInterest =
          investmentValue - annualInvestment * year - initialInvestment;
        annualData.push({
          year: year,
          interest: interestEarnedInYear,
          valueEndOfYear: investmentValue,
          annualInvestment: annualInvestment,
          totalInterest: totalInterest,
          totalAmountInvested: initialInvestment + annualInvestment * year,
        });
      }
    
      this.resultData.set( annualData)
    }


}