import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanAddRemoveMainOpListComponent } from './maintenance-plan-add-remove-main-op-list.component';

describe('MaintenancePlanAddRemoveMainOpListComponent', () => {
  let component: MaintenancePlanAddRemoveMainOpListComponent;
  let fixture: ComponentFixture<MaintenancePlanAddRemoveMainOpListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePlanAddRemoveMainOpListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanAddRemoveMainOpListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
