import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTypeListComponent } from './pool-type-list.component';

describe('PoolTypeListComponent', () => {
  let component: PoolTypeListComponent;
  let fixture: ComponentFixture<PoolTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
