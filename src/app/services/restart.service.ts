import { Injectable } from '@angular/core';
import { FoulService } from './foul.service';
import { StateService } from './state.service';
import { UncoveredLettersService } from './uncovered-letters.service';
import { WordDisplayService } from './word-display.service';
import { WordService } from './word.service';

@Injectable({
  providedIn: 'root',
})
export class RestartService {
  constructor(
    private wordService: WordService,
    private uncoveredLettersService: UncoveredLettersService,
    private foulService: FoulService,
    private stateService: StateService
  ) {}

  restart() {
    this.wordService.getNewWord();
    this.stateService.restartState();
    this.uncoveredLettersService.restart();
    this.foulService.restartFouls();
  }
}
