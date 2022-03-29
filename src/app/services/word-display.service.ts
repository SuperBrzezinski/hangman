import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UncoveredLettersService } from './uncovered-letters.service';
import { WordService } from './word.service';

@Injectable({
  providedIn: 'root',
})
export class WordDisplayService {
  private currentWordArr: string[] = [];
  private uncoveredLetters: string[] = [];

  $Listener = new Subject<string[]>();

  constructor(private wordService: WordService, private uncoveredLettersService: UncoveredLettersService) {
    this.init();
  }

  private whatToShow(): string[] {
    return this.currentWordArr.map((letter) => {
      return this.uncoveredLetters.includes(letter) ? letter : '_';
    });
  }

  private init() {
    this.wordService.$currentWordListener.subscribe((word) => {
      this.currentWordArr = word.split('');
      this.uncoveredLetters = [];
      this.$Listener.next(this.whatToShow());
    });
    this.uncoveredLettersService.$Listener.subscribe((letters) => {
      this.uncoveredLetters = letters;
      this.$Listener.next(this.whatToShow());
    });
  }
}
