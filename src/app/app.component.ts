import { Component, HostListener, OnInit } from '@angular/core';
import { BoardService } from './board-game/board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Board Game';
  constructor() {}
}
