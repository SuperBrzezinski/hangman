import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  $currentWordListener = new Subject<string>();

  private apiUrl = 'https://random-word-api.herokuapp.com/word';

  constructor(private http: HttpClient) {
    this.init();
  }

  public getNewWord() {
    this.http.get<string[]>(this.apiUrl).subscribe((wordArr) => {
      this.$currentWordListener.next(String(wordArr).toUpperCase());
    });
  }

  private init() {
    this.$currentWordListener.subscribe((word) => {
      console.log(word);
    });
    this.getNewWord();
  }
}
