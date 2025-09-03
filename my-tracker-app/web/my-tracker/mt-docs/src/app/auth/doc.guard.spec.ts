import { TestBed } from '@angular/core/testing';

import { DocGuard } from './doc.guard';

describe('DocGuard', () => {
  let guard: DocGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DocGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
