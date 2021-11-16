import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeUpdateListComponent } from './user-type-update-list.component';

describe('UserTypeUpdateListComponent', () => {
  let component: UserTypeUpdateListComponent;
  let fixture: ComponentFixture<UserTypeUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypeUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
