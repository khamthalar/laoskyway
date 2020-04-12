import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OudomxayDesComponent } from './oudomxay-des.component';

describe('OudomxayDesComponent', () => {
  let component: OudomxayDesComponent;
  let fixture: ComponentFixture<OudomxayDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OudomxayDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OudomxayDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
