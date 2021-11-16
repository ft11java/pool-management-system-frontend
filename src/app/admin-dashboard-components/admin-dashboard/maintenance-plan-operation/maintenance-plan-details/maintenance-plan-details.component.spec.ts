import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanDetailsComponent } from './maintenance-plan-details.component';

describe('MaintenancePlanDetailsComponent', () => {
  let component: MaintenancePlanDetailsComponent;
  let fixture: ComponentFixture<MaintenancePlanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePlanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
