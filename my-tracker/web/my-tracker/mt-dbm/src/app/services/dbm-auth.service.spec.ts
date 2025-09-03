import { TestBed } from '@angular/core/testing';

import { DbmAuthService } from './dbm-auth.service';

describe('DbmAuthService', () => {
  let service: DbmAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbmAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
