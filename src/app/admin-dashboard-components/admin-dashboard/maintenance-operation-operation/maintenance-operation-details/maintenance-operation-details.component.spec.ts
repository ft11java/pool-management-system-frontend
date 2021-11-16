import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOperationDetailsComponent } from './maintenance-operation-details.component';

describe('MaintenanceOperationDetailsComponent', () => {
  let component: MaintenanceOperationDetailsComponent;
  let fixture: ComponentFixture<MaintenanceOperationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceOperationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOperationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
