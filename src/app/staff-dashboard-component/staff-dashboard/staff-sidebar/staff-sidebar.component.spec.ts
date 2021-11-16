import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffSidebarComponent } from './staff-sidebar.component';

describe('StaffSidebarComponent', () => {
  let component: StaffSidebarComponent;
  let fixture: ComponentFixture<StaffSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
