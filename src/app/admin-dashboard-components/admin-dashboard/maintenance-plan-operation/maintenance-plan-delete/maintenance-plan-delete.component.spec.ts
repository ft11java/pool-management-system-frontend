import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanDeleteComponent } from './maintenance-plan-delete.component';

describe('MaintenancePlanDeleteComponent', () => {
  let component: MaintenancePlanDeleteComponent;
  let fixture: ComponentFixture<MaintenancePlanDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePlanDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
