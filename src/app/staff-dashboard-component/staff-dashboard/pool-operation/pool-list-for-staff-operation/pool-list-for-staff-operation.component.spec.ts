import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolListForStaffOperationComponent } from './pool-list-for-staff-operation.component';

describe('PoolListForStaffOperationComponent', () => {
  let component: PoolListForStaffOperationComponent;
  let fixture: ComponentFixture<PoolListForStaffOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolListForStaffOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolListForStaffOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
