import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressUpdateListComponent } from './address-update-list.component';

describe('AddressUpdateListComponent', () => {
  let component: AddressUpdateListComponent;
  let fixture: ComponentFixture<AddressUpdateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressUpdateListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressUpdateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
