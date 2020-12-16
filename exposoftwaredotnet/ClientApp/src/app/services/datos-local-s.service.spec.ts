import { TestBed } from '@angular/core/testing';

import { DatosLocalSService } from './datos-local-s.service';

describe('DatosLocalSService', () => {
  let service: DatosLocalSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosLocalSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
