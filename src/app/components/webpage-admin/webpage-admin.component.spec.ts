import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageAdminComponent } from './webpage-admin.component';

describe('WebpageAdminComponent', () => {
  let component: WebpageAdminComponent;
  let fixture: ComponentFixture<WebpageAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
