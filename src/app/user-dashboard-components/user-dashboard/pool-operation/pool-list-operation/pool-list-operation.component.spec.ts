import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolListOperationComponent } from './pool-list-operation.component';

describe('PoolListOperationComponent', () => {
  let component: PoolListOperationComponent;
  let fixture: ComponentFixture<PoolListOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolListOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolListOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
