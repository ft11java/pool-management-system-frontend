import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInformationViewComponent } from './user-information-view.component';

describe('UserInformationViewComponent', () => {
  let component: UserInformationViewComponent;
  let fixture: ComponentFixture<UserInformationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInformationViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInformationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
