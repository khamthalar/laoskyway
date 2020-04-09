import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoTrackingComponent } from './cargo-tracking.component';

describe('CargoTrackingComponent', () => {
  let component: CargoTrackingComponent;
  let fixture: ComponentFixture<CargoTrackingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargoTrackingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargoTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
