import { TestBed } from '@angular/core/testing';

import { GloService } from './glo.service';

describe('GloService', () => {
  let service: GloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
