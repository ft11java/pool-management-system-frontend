import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolRemoveUserComponent } from './pool-remove-user.component';

describe('PoolRemoveUserComponent', () => {
  let component: PoolRemoveUserComponent;
  let fixture: ComponentFixture<PoolRemoveUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolRemoveUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolRemoveUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
