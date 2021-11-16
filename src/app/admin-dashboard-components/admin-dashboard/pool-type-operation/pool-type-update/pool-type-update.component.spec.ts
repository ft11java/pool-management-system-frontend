import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTypeUpdateComponent } from './pool-type-update.component';

describe('PoolTypeUpdateComponent', () => {
  let component: PoolTypeUpdateComponent;
  let fixture: ComponentFixture<PoolTypeUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolTypeUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
