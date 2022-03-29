import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HangmanDisplayerComponent } from './hangman-displayer.component';

describe('HangmanDisplayerComponent', () => {
  let component: HangmanDisplayerComponent;
  let fixture: ComponentFixture<HangmanDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HangmanDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HangmanDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
