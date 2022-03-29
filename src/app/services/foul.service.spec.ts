import { TestBed } from '@angular/core/testing';

import { FoulService } from './fouls.service';

describe('FoulService', () => {
  let service: FoulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
