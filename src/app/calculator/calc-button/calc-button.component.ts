import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calc-button',
  standalone: true,
  imports: [],
  templateUrl: './calc-button.component.html',
  styleUrl: './calc-button.component.css'
})
export class CalcButtonComponent {
  @Input() value?: any;
}
