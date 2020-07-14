import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPopupSetupComponent } from './admin-popup-setup.component';

describe('AdminPopupSetupComponent', () => {
  let component: AdminPopupSetupComponent;
  let fixture: ComponentFixture<AdminPopupSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPopupSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPopupSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
