import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUsageTypeDeleteComponent } from './pool-usage-type-delete.component';

describe('PoolUsageTypeDeleteComponent', () => {
  let component: PoolUsageTypeDeleteComponent;
  let fixture: ComponentFixture<PoolUsageTypeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolUsageTypeDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUsageTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
