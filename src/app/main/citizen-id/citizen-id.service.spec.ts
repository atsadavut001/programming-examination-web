import { TestBed } from '@angular/core/testing';

import { CitizenIdService } from './citizen-id.service';

describe('CitizenIdService', () => {
  let service: CitizenIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitizenIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
