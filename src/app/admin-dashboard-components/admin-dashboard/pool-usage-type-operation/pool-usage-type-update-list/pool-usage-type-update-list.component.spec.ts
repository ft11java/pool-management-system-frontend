import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUsageTypeUpdateListComponent } from './pool-usage-type-update-list.component';

describe('PoolUsageTypeUpdateListComponent', () => {
  let component: PoolUsageTypeUpdateListComponent;
  let fixture: ComponentFixture<PoolUsageTypeUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolUsageTypeUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUsageTypeUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
