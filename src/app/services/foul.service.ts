import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UncoveredLettersService } from './uncovered-letters.service';
import { WordService } from './word.service';

@Injectable({
  providedIn: 'root',
})
export class FoulService {
  private currentWordArr: string[] = [];

  private foulState = 0;

  $Listener = new Subject<number>();

  constructor(private uncoveredLettersService: UncoveredLettersService, private wordService: WordService) {
    this.init();
  }

  restartFouls() {
    this.foulState = 0;
    this.$Listener.next(this.foulState);
  }

  private foulEstimation(letter: string) {
    if (!this.currentWordArr.includes(letter)) {
      this.foulState++;
      this.$Listener.next(this.foulState);
    }
  }

  private init() {
    this.uncoveredLettersService.$Listener.subscribe((letters) => {
      this.foulEstimation(letters[letters.length - 1]);
    });
    this.wordService.$currentWordListener.subscribe((word) => (this.currentWordArr = word.split('')));
  }
}
