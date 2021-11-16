import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeUpdateComponent } from './user-type-update.component';

describe('UserTypeUpdateComponent', () => {
  let component: UserTypeUpdateComponent;
  let fixture: ComponentFixture<UserTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
