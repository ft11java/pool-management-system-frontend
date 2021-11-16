import { TestBed } from '@angular/core/testing';

import { PoolTypeOperationServiceService } from './pool-type-operation-service.service';

describe('PoolTypeOperationServiceService', () => {
  let service: PoolTypeOperationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolTypeOperationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
