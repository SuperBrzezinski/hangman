import { Component, OnInit } from '@angular/core';
import { RestartService } from 'src/app/services/restart.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-restart-button',
  templateUrl: './restart-button.component.html',
  styleUrls: ['./restart-button.component.scss'],
})
export class RestartButtonComponent implements OnInit {
  constructor(private restartService: RestartService, private stateService: StateService) {}

  ngOnInit(): void {}

  restartGame() {
    this.restartService.restart();
  }

  isNotPlaying() {
    return this.stateService.state !== 'playing';
  }
}
