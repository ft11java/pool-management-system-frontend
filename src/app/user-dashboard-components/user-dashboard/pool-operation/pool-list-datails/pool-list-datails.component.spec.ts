import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolListDatailsComponent } from './pool-list-datails.component';

describe('PoolListDatailsComponent', () => {
  let component: PoolListDatailsComponent;
  let fixture: ComponentFixture<PoolListDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolListDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolListDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
