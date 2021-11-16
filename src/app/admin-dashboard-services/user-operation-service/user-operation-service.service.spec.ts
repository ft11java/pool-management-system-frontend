import { TestBed } from '@angular/core/testing';

import { UserOperationServiceService } from './user-operation-service.service';

describe('UserOperationServiceService', () => {
  let service: UserOperationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserOperationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
