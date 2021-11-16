import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTypeDeleteComponent } from './pool-type-delete.component';

describe('PoolTypeDeleteComponent', () => {
  let component: PoolTypeDeleteComponent;
  let fixture: ComponentFixture<PoolTypeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolTypeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
