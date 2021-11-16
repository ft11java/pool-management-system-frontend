import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolDeleteComponent } from './pool-delete.component';

describe('PoolDeleteComponent', () => {
  let component: PoolDeleteComponent;
  let fixture: ComponentFixture<PoolDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
