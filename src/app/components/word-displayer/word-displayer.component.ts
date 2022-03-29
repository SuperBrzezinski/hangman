import { Component, OnInit } from '@angular/core';
import { WordDisplayService } from 'src/app/services/word-display.service';

@Component({
  selector: 'app-word-displayer',
  templateUrl: './word-displayer.component.html',
  styleUrls: ['./word-displayer.component.scss'],
})
export class WordDisplayerComponent implements OnInit {
  public displayArr: string[] = [];

  constructor(private wordDisplayService: WordDisplayService) {}

  ngOnInit(): void {
    this.wordDisplayService.$Listener.subscribe((arr) => (this.displayArr = arr));
  }
}
