import { TestBed } from '@angular/core/testing';

import { SignalRPendonService } from './signal-rpendon.service';

describe('SignalRPendonService', () => {
  let service: SignalRPendonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignalRPendonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
