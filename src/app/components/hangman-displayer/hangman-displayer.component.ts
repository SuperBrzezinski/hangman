import { Component, OnInit } from '@angular/core';
import { FoulService } from 'src/app/services/foul.service';

@Component({
  selector: 'app-hangman-displayer',
  templateUrl: './hangman-displayer.component.html',
  styleUrls: ['./hangman-displayer.component.scss'],
})
export class HangmanDisplayerComponent implements OnInit {
  public foulLevel: number = 0;
  constructor(private foulService: FoulService) {}

  ngOnInit(): void {
    this.foulService.$Listener.subscribe((foulState) => {
      this.foulLevel = foulState;
    });
  }
}
