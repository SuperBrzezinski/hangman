import { Injectable } from '@angular/core';
import { FoulService } from './fouls.service';
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
    private foulsService: FoulsService,
    private stateService: StateService
  ) {}

  restart() {
    this.wordService.getNewWord();
    this.uncoveredLettersService.restart();
    this.foulService.restartFouls();
    this.stateService.restartState();
  }
}
