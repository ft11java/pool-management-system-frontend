import { TestBed } from '@angular/core/testing';

import { PoolUsageTypeOperationServiceService } from './pool-usage-type-operation-service.service';

describe('PoolUsageTypeOperationServiceService', () => {
  let service: PoolUsageTypeOperationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolUsageTypeOperationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
