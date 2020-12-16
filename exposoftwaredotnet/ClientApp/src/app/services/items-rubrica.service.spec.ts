import { TestBed } from '@angular/core/testing';

import { ItemsRubricaService } from './items-rubrica.service';

describe('ItemsRubricaService', () => {
  let service: ItemsRubricaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsRubricaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
