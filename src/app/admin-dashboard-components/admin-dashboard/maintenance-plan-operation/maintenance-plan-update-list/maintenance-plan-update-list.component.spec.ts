import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanUpdateListComponent } from './maintenance-plan-update-list.component';

describe('MaintenancePlanUpdateListComponent', () => {
  let component: MaintenancePlanUpdateListComponent;
  let fixture: ComponentFixture<MaintenancePlanUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePlanUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
