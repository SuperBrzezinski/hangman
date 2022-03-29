import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WordDisplayerComponent } from './components/word-displayer/word-displayer.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { HangmanDisplayerComponent } from './components/hangman-displayer/hangman-displayer.component';
import { AlertComponent } from './components/alert/alert.component';
import { RestartButtonComponent } from './components/restart-button/restart-button.component';

@NgModule({
  declarations: [AppComponent, WordDisplayerComponent, KeyboardComponent, HangmanDisplayerComponent, AlertComponent, RestartButtonComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
