import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOperationUpdateComponent } from './maintenance-operation-update.component';

describe('MaintenanceOperationUpdateComponent', () => {
  let component: MaintenanceOperationUpdateComponent;
  let fixture: ComponentFixture<MaintenanceOperationUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceOperationUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOperationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
