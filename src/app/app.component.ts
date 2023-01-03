import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BoardComponent } from './board-game/board.component';

@Component({
  selector: 'app-board-game',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'BoardGame';
  // constructor(private injector: Injector) {
  //   const el = createCustomElement(BoardComponent, { injector });
  //   customElements.define('nagp-board-game', el);
  // }
  // ngDoBootstrap() {}
}
