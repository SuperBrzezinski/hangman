import { Component, OnInit } from '@angular/core';
import { StateService } from 'src/app/services/state.service';
import { UncoveredLettersService } from 'src/app/services/uncovered-letters.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss'],
})
export class KeyboardComponent implements OnInit {
  public firstRow: string[] = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
  public secondRow: string[] = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
  public thirdRow: string[] = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];

  public usedLetters: string[] = [];

  constructor(private uncoveredLettersService: UncoveredLettersService, private stateService: StateService) {}

  ngOnInit(): void {}

  btnPress(letter: string) {
    console.log(letter);
    this.uncoveredLettersService.addLetter(letter);
  }

  isDisabled(letter: string): boolean {
    return this.uncoveredLettersService.letters.includes(letter) || this.stateService.state !== 'playing' ? true : false;
  }
}
