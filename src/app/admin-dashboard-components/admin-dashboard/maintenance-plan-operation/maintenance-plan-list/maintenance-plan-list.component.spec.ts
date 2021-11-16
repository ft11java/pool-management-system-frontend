import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanListComponent } from './maintenance-plan-list.component';

describe('MaintenancePlanListComponent', () => {
  let component: MaintenancePlanListComponent;
  let fixture: ComponentFixture<MaintenancePlanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePlanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
