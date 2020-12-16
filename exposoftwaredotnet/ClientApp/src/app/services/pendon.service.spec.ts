import { TestBed } from '@angular/core/testing';

import { PendonService } from './pendon.service';

describe('PendonService', () => {
  let service: PendonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PendonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
