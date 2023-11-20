import { TestBed } from '@angular/core/testing';

import { LogGuardServiceService } from './log-guard-service.service';

describe('LogGuardServiceService', () => {
  let service: LogGuardServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogGuardServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
