import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BokeoDesComponent } from './bokeo-des.component';

describe('BokeoDesComponent', () => {
  let component: BokeoDesComponent;
  let fixture: ComponentFixture<BokeoDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BokeoDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BokeoDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
