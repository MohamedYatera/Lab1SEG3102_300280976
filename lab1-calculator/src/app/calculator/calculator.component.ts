import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  resultText = '';

  operate(aStr: string, bStr: string, op: string): void {
    const a = parseFloat(aStr);
    const b = parseFloat(bStr);

    if (isNaN(a) || isNaN(b)) {
      this.resultText = '';
      return;
    }

    let res: number;

    switch (op) {
      case '+': res = a + b; break;
      case '-': res = a - b; break;
      case '*': res = a * b; break;
      case '/': res = b === 0 ? NaN : a / b; break;
      default:  res = NaN;
    }

    this.resultText = Number.isFinite(res) ? String(res) : 'Error';
  }
}
