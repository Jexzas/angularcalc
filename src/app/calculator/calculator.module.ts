import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator.component';
import { CalcButtonModule } from './calc-button/calc-button.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, CalculatorComponent, CalcButtonModule
  ],
  exports: [
    CalculatorComponent
  ]
})
export class CalculatorModule { }
