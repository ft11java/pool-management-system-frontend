import { TestBed } from '@angular/core/testing';

import { MaintenancePlanOperationServiceService } from './maintenance-plan-operation-service.service';

describe('MaintenancePlanOperationServiceService', () => {
  let service: MaintenancePlanOperationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenancePlanOperationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
