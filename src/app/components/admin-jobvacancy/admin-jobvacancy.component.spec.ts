import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJobvacancyComponent } from './admin-jobvacancy.component';

describe('AdminJobvacancyComponent', () => {
  let component: AdminJobvacancyComponent;
  let fixture: ComponentFixture<AdminJobvacancyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminJobvacancyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJobvacancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
