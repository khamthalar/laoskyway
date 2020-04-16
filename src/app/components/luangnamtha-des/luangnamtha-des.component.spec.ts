import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuangnamthaDesComponent } from './luangnamtha-des.component';

describe('LuangnamthaDesComponent', () => {
  let component: LuangnamthaDesComponent;
  let fixture: ComponentFixture<LuangnamthaDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuangnamthaDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuangnamthaDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
