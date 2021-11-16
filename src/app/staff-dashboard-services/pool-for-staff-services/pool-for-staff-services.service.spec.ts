import { TestBed } from '@angular/core/testing';

import { PoolForStaffServicesService } from './pool-for-staff-services.service';

describe('PoolForStaffServicesService', () => {
  let service: PoolForStaffServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoolForStaffServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
