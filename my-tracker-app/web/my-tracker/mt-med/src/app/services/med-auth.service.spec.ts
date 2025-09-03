import { TestBed } from '@angular/core/testing';

import { MedAuthService } from './med-auth.service';

describe('MedAuthService', () => {
  let service: MedAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MedAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
