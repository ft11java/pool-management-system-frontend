import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTypeUpdateListComponent } from './pool-type-update-list.component';

describe('PoolTypeUpdateListComponent', () => {
  let component: PoolTypeUpdateListComponent;
  let fixture: ComponentFixture<PoolTypeUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolTypeUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTypeUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
