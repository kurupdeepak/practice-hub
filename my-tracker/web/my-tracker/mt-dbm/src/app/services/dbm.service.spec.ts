import { TestBed } from '@angular/core/testing';

import { DbmService } from './dbm.service';

describe('DbmService', () => {
  let service: DbmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
