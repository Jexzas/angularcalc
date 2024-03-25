import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculatorModule } from './calculator/calculator.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculatorModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Calc';
}
