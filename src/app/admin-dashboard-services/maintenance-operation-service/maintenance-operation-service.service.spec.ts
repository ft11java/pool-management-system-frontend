import { TestBed } from '@angular/core/testing';

import { MaintenanceOperationServiceService } from './maintenance-operation-service.service';

describe('MaintenanceOperationServiceService', () => {
  let service: MaintenanceOperationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenanceOperationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
