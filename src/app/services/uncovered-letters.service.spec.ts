import { TestBed } from '@angular/core/testing';

import { UncoveredLettersService } from './uncovered-letters.service';

describe('UncoveredLettersService', () => {
  let service: UncoveredLettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UncoveredLettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
