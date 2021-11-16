import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressDatailsComponent } from './address-datails.component';

describe('AddressDatailsComponent', () => {
  let component: AddressDatailsComponent;
  let fixture: ComponentFixture<AddressDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressDatailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
