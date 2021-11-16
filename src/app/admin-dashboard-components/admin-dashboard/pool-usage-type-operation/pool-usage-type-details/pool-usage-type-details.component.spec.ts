import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUsageTypeDetailsComponent } from './pool-usage-type-details.component';

describe('PoolUsageTypeDetailsComponent', () => {
  let component: PoolUsageTypeDetailsComponent;
  let fixture: ComponentFixture<PoolUsageTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolUsageTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUsageTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
