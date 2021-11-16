import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOperationDeleteComponent } from './maintenance-operation-delete.component';

describe('MaintenanceOperationDeleteComponent', () => {
  let component: MaintenanceOperationDeleteComponent;
  let fixture: ComponentFixture<MaintenanceOperationDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceOperationDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOperationDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
