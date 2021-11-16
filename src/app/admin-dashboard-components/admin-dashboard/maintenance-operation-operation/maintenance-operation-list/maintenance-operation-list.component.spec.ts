import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOperationListComponent } from './maintenance-operation-list.component';

describe('MaintenanceOperationListComponent', () => {
  let component: MaintenanceOperationListComponent;
  let fixture: ComponentFixture<MaintenanceOperationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceOperationListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOperationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
