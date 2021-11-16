import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUsageTypeUpdateComponent } from './pool-usage-type-update.component';

describe('PoolUsageTypeUpdateComponent', () => {
  let component: PoolUsageTypeUpdateComponent;
  let fixture: ComponentFixture<PoolUsageTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolUsageTypeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUsageTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
