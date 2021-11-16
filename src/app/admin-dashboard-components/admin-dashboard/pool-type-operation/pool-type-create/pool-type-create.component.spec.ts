import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolTypeCreateComponent } from './pool-type-create.component';

describe('PoolTypeCreateComponent', () => {
  let component: PoolTypeCreateComponent;
  let fixture: ComponentFixture<PoolTypeCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolTypeCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
