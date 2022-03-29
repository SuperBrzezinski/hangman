import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FoulService } from './fouls.service';
import { WordDisplayService } from './word-display.service';

export type State = 'playing' | 'win' | 'loose';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  public state: State = 'playing';
  $Listener = new Subject<State>();
  constructor(private foulsService: FoulsService, private wordDisplayService: WordDisplayService) {
    this.init();
  }

  restartState() {
    this.$Listener.next('playing');
    this.state = 'playing';
  }

  private init() {
    this.foulService.$Listener.subscribe((foulState) => {
      if (foulState === 6) {
        this.$Listener.next('loose');
        this.state = 'loose';
      }
    });

    this.wordDisplayService.$Listener.subscribe((letterArr) => {
      if (!letterArr.includes('_')) {
        this.$Listener.next('win');
        this.state = 'win';
      }
    });
  }
}
