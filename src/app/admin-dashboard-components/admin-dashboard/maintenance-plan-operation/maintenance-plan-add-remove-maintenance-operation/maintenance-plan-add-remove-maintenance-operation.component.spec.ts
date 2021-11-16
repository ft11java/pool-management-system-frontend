import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanAddRemoveMaintenanceOperationComponent } from './maintenance-plan-add-remove-maintenance-operation.component';

describe('MaintenancePlanAddRemoveMaintenanceOperationComponent', () => {
  let component: MaintenancePlanAddRemoveMaintenanceOperationComponent;
  let fixture: ComponentFixture<MaintenancePlanAddRemoveMaintenanceOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePlanAddRemoveMaintenanceOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanAddRemoveMaintenanceOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
