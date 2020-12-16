import { TestBed } from '@angular/core/testing';

import { SignalRProyectoService } from './signal-rproyecto.service';

describe('SignalRProyectoService', () => {
  let service: SignalRProyectoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRProyectoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
