import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUpdateListComponent } from './pool-update-list.component';

describe('PoolUpdateListComponent', () => {
  let component: PoolUpdateListComponent;
  let fixture: ComponentFixture<PoolUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
