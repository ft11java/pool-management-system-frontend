import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUsageTypeCreateComponent } from './pool-usage-type-create.component';

describe('PoolUsageTypeCreateComponent', () => {
  let component: PoolUsageTypeCreateComponent;
  let fixture: ComponentFixture<PoolUsageTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolUsageTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUsageTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
