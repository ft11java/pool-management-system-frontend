import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUsageTypeListComponent } from './pool-usage-type-list.component';

describe('PoolUsageTypeListComponent', () => {
  let component: PoolUsageTypeListComponent;
  let fixture: ComponentFixture<PoolUsageTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolUsageTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUsageTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
