import { TestBed } from '@angular/core/testing';

import { DbmAuthGuard } from './dbm-auth.guard';

describe('DbmAuthGuard', () => {
  let guard: DbmAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DbmAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
