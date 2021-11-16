import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolUpdateComponent } from './pool-update.component';

describe('PoolUpdateComponent', () => {
  let component: PoolUpdateComponent;
  let fixture: ComponentFixture<PoolUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
