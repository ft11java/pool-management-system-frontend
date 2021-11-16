import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffInformationViewComponent } from './staff-information-view.component';

describe('StaffInformationViewComponent', () => {
  let component: StaffInformationViewComponent;
  let fixture: ComponentFixture<StaffInformationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffInformationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
