import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  number: string = '';

  historical: string[];

  buttons: string[] = [
    'CE',
    'C',
    '<-',
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '^',
    '.',
    '0',
    '=',
    '+',
  ];

  addNumber(number: string): void {
    this.number = this.number + number;

    console.log(this.number);
  }

  sum(operational: string): void {
    this.setHistorical(this.number);
  }

  setHistorical(number: string) {
    this.historical = [];
    this.historical.push(number);
  }
}
