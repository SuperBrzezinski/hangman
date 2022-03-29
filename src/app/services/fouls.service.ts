import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Letter, UncoveredLettersService } from './uncovered-letters.service';
import { WordService } from './word.service';

@Injectable({
  providedIn: 'root',
})
export class FoulService {
  private currentWordArr: string[] = [];

  // private foulState = 0;

  $Listener = new BehaviorSubject<number>(0);

  constructor(private uncoveredLettersService: UncoveredLettersService, private wordService: WordService) {
    this.init();
  }

  get listener$() {
    return this.$Listener.asObservable();
  }

  countFouls(letters: Letter[]) {
    return letters.filter((letter) => !letter.included).length;
  }

  restartFouls() {
    // this.foulState = 0;
    this.$Listener.next(0);
  }

  private foulEstimation(letter: string) {
    if (this.currentWordArr.includes(letter)) {
      return;
    }

    this.$Listener.next(this.$Listener.getValue() + 1);
  }

  private init() {
    this.uncoveredLettersService.$Listener.subscribe((letters) => {
      this.foulEstimation(letters[letters.length - 1]);
    });
    this.wordService.$currentWordListener.subscribe((word) => (this.currentWordArr = word.split('')));
  }
}
