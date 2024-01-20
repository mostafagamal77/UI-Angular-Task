import { TestBed } from '@angular/core/testing';

import { ChangeLangService } from './change-lang.service';

describe('ChangeLangService', () => {
  let service: ChangeLangService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChangeLangService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
