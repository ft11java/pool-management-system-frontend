import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolDetailsForStaffComponent } from './pool-details-for-staff.component';

describe('PoolDetailsForStaffComponent', () => {
  let component: PoolDetailsForStaffComponent;
  let fixture: ComponentFixture<PoolDetailsForStaffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolDetailsForStaffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolDetailsForStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
