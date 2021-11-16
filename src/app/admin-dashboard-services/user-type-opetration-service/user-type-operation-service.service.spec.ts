import { TestBed } from '@angular/core/testing';

import { UserTypeOperationServiceService } from './user-type-operation-service.service';

describe('UserTypeOperationServiceService', () => {
  let service: UserTypeOperationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserTypeOperationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
