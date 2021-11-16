import { TestBed } from '@angular/core/testing';

import { AllVisitorServicesService } from './all-visitor-services.service';

describe('AllVisitorServicesService', () => {
  let service: AllVisitorServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllVisitorServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
