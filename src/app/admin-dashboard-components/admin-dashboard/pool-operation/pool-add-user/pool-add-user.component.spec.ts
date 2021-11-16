import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolAddUserComponent } from './pool-add-user.component';

describe('PoolAddUserComponent', () => {
  let component: PoolAddUserComponent;
  let fixture: ComponentFixture<PoolAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolAddUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
