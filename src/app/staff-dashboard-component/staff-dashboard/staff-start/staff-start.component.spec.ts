import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffStartComponent } from './staff-start.component';

describe('StaffStartComponent', () => {
  let component: StaffStartComponent;
  let fixture: ComponentFixture<StaffStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
