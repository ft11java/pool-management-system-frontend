import { TestBed } from '@angular/core/testing';

import { StaffForStaffServicesService } from './staff-for-staff-services.service';

describe('StaffForStaffServicesService', () => {
  let service: StaffForStaffServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffForStaffServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
