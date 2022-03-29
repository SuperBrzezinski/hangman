import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UncoveredLettersService {
  public letters: string[] = [];
  $Listener = new Subject<string[]>();
  constructor() {}

  addLetter(letter: string) {
    this.letters.push(letter);
    this.$Listener.next(this.letters);
  }

  restart() {
    this.letters = [];
    this.$Listener.next(this.letters);
  }
}
