import { TestBed } from '@angular/core/testing';

import { UserForUserServicesService } from './user-for-user-services.service';

describe('UserForUserServicesService', () => {
  let service: UserForUserServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserForUserServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
