import { TestBed } from '@angular/core/testing';

import { DescripcionCService } from './descripcion-c.service';

describe('DescripcionCService', () => {
  let service: DescripcionCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DescripcionCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
