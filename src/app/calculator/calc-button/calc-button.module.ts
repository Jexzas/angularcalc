import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcButtonComponent } from './calc-button.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, CalcButtonComponent
  ],
  exports: [
    CalcButtonComponent
  ]
})
export class CalcButtonModule { }
