import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DapproachComponent } from './dapproach.component';

describe('DapproachComponent', () => {
  let component: DapproachComponent;
  let fixture: ComponentFixture<DapproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DapproachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DapproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
