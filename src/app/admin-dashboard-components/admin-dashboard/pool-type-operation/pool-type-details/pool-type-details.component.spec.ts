import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTypeDetailsComponent } from './pool-type-details.component';

describe('PoolTypeDetailsComponent', () => {
  let component: PoolTypeDetailsComponent;
  let fixture: ComponentFixture<PoolTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
