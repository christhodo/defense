import { TestBed } from '@angular/core/testing';

import { DefensesService } from './defenses.service';

describe('DefensesService', () => {
  let service: DefensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DefensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
