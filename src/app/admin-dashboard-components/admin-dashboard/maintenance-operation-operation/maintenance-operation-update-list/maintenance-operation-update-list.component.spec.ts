import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOperationUpdateListComponent } from './maintenance-operation-update-list.component';

describe('MaintenanceOperationUpdateListComponent', () => {
  let component: MaintenanceOperationUpdateListComponent;
  let fixture: ComponentFixture<MaintenanceOperationUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceOperationUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOperationUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
