import { TestBed } from '@angular/core/testing';

import { SignalRDocenteService } from './signal-rdocente.service';

describe('SignalRDocenteService', () => {
  let service: SignalRDocenteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRDocenteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
