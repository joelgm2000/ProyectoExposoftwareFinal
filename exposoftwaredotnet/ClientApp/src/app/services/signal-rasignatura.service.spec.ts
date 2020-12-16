import { TestBed } from '@angular/core/testing';

import { SignalRAsignaturaService } from './signal-rasignatura.service';

describe('SignalRAsignaturaService', () => {
  let service: SignalRAsignaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRAsignaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
