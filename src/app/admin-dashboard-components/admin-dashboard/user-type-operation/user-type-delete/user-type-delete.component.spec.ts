import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeDeleteComponent } from './user-type-delete.component';

describe('UserTypeDeleteComponent', () => {
  let component: UserTypeDeleteComponent;
  let fixture: ComponentFixture<UserTypeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
