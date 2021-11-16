import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceOperationCreateComponent } from './maintenance-operation-create.component';

describe('MaintenanceOperationCreateComponent', () => {
  let component: MaintenanceOperationCreateComponent;
  let fixture: ComponentFixture<MaintenanceOperationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceOperationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceOperationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
