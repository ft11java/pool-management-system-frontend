import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolAddRemoveUserListComponent } from './pool-add-remove-user-list.component';

describe('PoolAddRemoveUserListComponent', () => {
  let component: PoolAddRemoveUserListComponent;
  let fixture: ComponentFixture<PoolAddRemoveUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolAddRemoveUserListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolAddRemoveUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
