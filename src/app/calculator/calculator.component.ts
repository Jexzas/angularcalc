import { Component } from '@angular/core';
import { CalcButtonComponent } from './calc-button/calc-button.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CalcButtonComponent ],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent {
  userInput?: string = ""; // will store the first number, get reset to nullish string, then become second number
  userInput1?: string = ""; // will store the first number
  result?: number;
  operation?: string;

  type(input?: string): void {
    this.userInput += input!;
  }

  setOperation(operation?: string): void {
    if (this.userInput1 == "0" && this.userInput == "0" && this.result) {
      this.operation = operation;
      this.userInput1 = this.result.toString();
      this.userInput = "";
    } else {
      this.operation = operation;
      this.userInput1 = this.userInput;
      this.userInput = "";
    }
  }

  clear(): void {
    this.operation = "";
    this.userInput = "";
    this.userInput1 = "";
    this.result = undefined;
  }

  calculate(): void {
    let firstValue = Number(this.userInput1);
    let secondValue = Number(this.userInput);
    switch (this.operation) {
      case "add":
        this.result = firstValue + secondValue;
        break;
      case "subtract":
        this.result = firstValue - secondValue; 
        break;
      case "multiply":
        this.result = firstValue * secondValue; 
        break;
      case "divide":
        this.result = firstValue / secondValue; 
        break;
      default:
        this.clear();
        break;
    }
    this.userInput = "0";
    this.userInput1 = "0";
  }
}
