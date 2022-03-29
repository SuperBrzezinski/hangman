import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Subject } from 'rxjs';
import { FoulsService } from './fouls.service';
import { WordService } from './word.service';

export interface Letter {
  value: string;
  included: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class HangmanStateService {
  public currentWord!: string;

  letters$ = new BehaviorSubject<Letter[]>([]);

  constructor(private wordService: WordService, private foulsService: FoulsService) {
    this.wordService.$currentWordListener.subscribe((word) => (this.currentWord = word));
  }

  getFoulsCount() {
    return this.foulService.countFouls(this.letters$.value);
  }

  addLetter(letter: string) {
    this.letters$.next([
      ...this.letters$.getValue(),

      {
        value: letter,
        included: this.currentWord.includes(letter),
      },
    ]);
  }

  restart() {
    this.letters$.next([]);
  }
}
