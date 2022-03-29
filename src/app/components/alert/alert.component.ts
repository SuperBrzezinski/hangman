import { Component, OnInit } from '@angular/core';
import { RestartService } from 'src/app/services/restart.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(private stateService: StateService) {}

  ngOnInit(): void {}

  isWin() {
    return this.stateService.state === 'win';
  }

  isLoose() {
    return this.stateService.state === 'loose';
  }
}
