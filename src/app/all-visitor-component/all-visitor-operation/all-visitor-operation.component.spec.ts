import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllVisitorOperationComponent } from './all-visitor-operation.component';

describe('AllVisitorOperationComponent', () => {
  let component: AllVisitorOperationComponent;
  let fixture: ComponentFixture<AllVisitorOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllVisitorOperationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllVisitorOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
