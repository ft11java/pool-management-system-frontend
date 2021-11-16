import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeCreateComponent } from './user-type-create.component';

describe('UserTypeCreateComponent', () => {
  let component: UserTypeCreateComponent;
  let fixture: ComponentFixture<UserTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
