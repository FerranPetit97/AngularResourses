import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  stringNumber: string = '';

  historical: string[] = [];

  historicalNumber: number[] = [];

  result: number;

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

  addNumber(stringNumber: string): void {
    this.stringNumber = this.stringNumber + stringNumber;
  }

  sum(operational: string): void {
    this.getResult(operational);

    this.setHistorical(`${this.result} +`);

    this.stringNumber = '';
  }

  subtract(operational: string): void {
    this.getResult(operational);

    this.setHistorical(`${this.result} -`);

    this.stringNumber = '';
  }

  multiply(operational: string): void {
    this.getResult(operational);

    this.setHistorical(`${this.result} x`);

    this.stringNumber = '';
  }

  raised(operational: string): void {
    this.getResult(operational);

    this.setHistorical(`${this.result} ^`);

    this.stringNumber = '';
  }

  divide(operational: string): void {
    this.getResult(operational);

    this.setHistorical(`${this.result} /`);

    this.stringNumber = '';
  }

  getResult(operational: string): void {
    if (this.result) {
      switch (operational) {
        case '+':
          this.result = this.result + this.getNumber(this.stringNumber);
          break;
        case '-':
          this.result = this.result - this.getNumber(this.stringNumber);
          break;
        case '^':
          this.result = Math.pow(
            this.result,
            this.getNumber(this.stringNumber)
          );
          break;
        case 'x':
          this.result = this.result * this.getNumber(this.stringNumber);
          break;
        case '/':
          this.result = this.result / this.getNumber(this.stringNumber);
          break;
        case '=':
          if (this.historical.length != 0) {
            const lastHistorical = this.historical[this.historical.length - 1];
            const equalOperational = lastHistorical[lastHistorical.length - 1];

            this.getResult(equalOperational);
          }
          break;
      }
    } else {
      this.result = this.getNumber(this.stringNumber);
    }
  }

  setHistorical(stringNumber: string): void {
    if (this.result || this.result === 0) {
      this.historicalNumber.push(this.result);
    }
    this.historical.push(stringNumber);
  }

  getNumber(stringNumber: string): number {
    let number: number;

    number = +stringNumber;

    return number;
  }

  equal(operational: string): void {
    this.getResult(operational);

    this.setHistorical(`${this.result}`);

    this.stringNumber = '';
  }

  clearScreen() {
    this.stringNumber = '';
  }

  remove() {
    if (this.stringNumber) {
      this.stringNumber = this.stringNumber.slice(0, -1);
    }
  }

  clear(): void {
    this.historical = [];
    this.result = 0;
    this.stringNumber = '';
  }
}
