import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuangprabangDesComponent } from './luangprabang-des.component';

describe('LuangprabangDesComponent', () => {
  let component: LuangprabangDesComponent;
  let fixture: ComponentFixture<LuangprabangDesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuangprabangDesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuangprabangDesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
