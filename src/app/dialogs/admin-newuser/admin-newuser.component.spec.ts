import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewuserComponent } from './admin-newuser.component';

describe('AdminNewuserComponent', () => {
  let component: AdminNewuserComponent;
  let fixture: ComponentFixture<AdminNewuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNewuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
