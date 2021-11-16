import { TestBed } from '@angular/core/testing';

import { RoleOperationServiceService } from './role-operation-service.service';

describe('RoleOperationServiceService', () => {
  let service: RoleOperationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoleOperationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
