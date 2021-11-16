import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdateListComponent } from './user-update-list.component';

describe('UserUpdateListComponent', () => {
  let component: UserUpdateListComponent;
  let fixture: ComponentFixture<UserUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
