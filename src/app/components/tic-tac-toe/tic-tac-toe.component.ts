import { Component, OnInit } from '@angular/core';

enum ETurn {
  blue = 'blue',
  red = 'red',
}

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  turn: ETurn;

  firstTimeClicked: boolean = false;

  ngOnInit() {
    this.turn = this.flipTurn();
  }

  changeTurn(event: MouseEvent) {
    if (event) {
      this.firstTimeClicked = true;
    }
    this.turn = this.turn === ETurn.blue ? ETurn.red : ETurn.blue;
  }

  private flipTurn(): ETurn {
    return Math.random() < 0.5 ? ETurn.blue : ETurn.red;
  }
}
