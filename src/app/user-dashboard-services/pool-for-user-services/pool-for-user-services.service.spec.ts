import { TestBed } from '@angular/core/testing';

import { PoolForUserServicesService } from './pool-for-user-services.service';

describe('PoolForUserServicesService', () => {
  let service: PoolForUserServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolForUserServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
