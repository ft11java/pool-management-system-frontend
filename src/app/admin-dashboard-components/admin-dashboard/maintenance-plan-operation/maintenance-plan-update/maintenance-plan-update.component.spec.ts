import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanUpdateComponent } from './maintenance-plan-update.component';

describe('MaintenancePlanUpdateComponent', () => {
  let component: MaintenancePlanUpdateComponent;
  let fixture: ComponentFixture<MaintenancePlanUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePlanUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
