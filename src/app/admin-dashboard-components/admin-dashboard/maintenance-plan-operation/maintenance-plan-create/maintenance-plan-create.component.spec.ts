import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenancePlanCreateComponent } from './maintenance-plan-create.component';

describe('MaintenancePlanCreateComponent', () => {
  let component: MaintenancePlanCreateComponent;
  let fixture: ComponentFixture<MaintenancePlanCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenancePlanCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenancePlanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
