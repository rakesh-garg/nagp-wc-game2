import { Component, HostListener, OnInit } from '@angular/core';
import { keyToDirection } from '../defs';
import { BoardService } from './board.service';

@Component({
  selector: 'board-game',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(public boardService: BoardService) { }

  ngOnInit(): void {
    this.boardService.initGame();
  }


  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.boardService.isInProgress()) {
      switch (event.key) {
        case 'r':
          this.boardService.initGame();
          return;
      }

      const direction = keyToDirection[event.key];
      if (direction) {
        this.boardService.move(direction);
      }
    } else {
      switch (event.key) {
        case 's':
          this.boardService.startGame();
          break;
        case 'S':
          this.boardService.startGame([
            1, 2, 3, 4,
            5, 6, 7, 8,
            9, 10, 11, 12,
            null, 13, 14, 15
          ]);
          break;
      }
    }
  }

}
