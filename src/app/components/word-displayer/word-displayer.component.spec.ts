import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordDisplayerComponent } from './word-displayer.component';

describe('WordDisplayerComponent', () => {
  let component: WordDisplayerComponent;
  let fixture: ComponentFixture<WordDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordDisplayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
