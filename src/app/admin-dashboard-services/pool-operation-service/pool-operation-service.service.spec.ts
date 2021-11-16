import { TestBed } from '@angular/core/testing';

import { PoolServiceService } from './pool-operation-service.service';

describe('PoolServiceService', () => {
  let service: PoolServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
