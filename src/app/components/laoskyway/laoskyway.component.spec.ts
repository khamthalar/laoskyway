import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaoskywayComponent } from './laoskyway.component';

describe('LaoskywayComponent', () => {
  let component: LaoskywayComponent;
  let fixture: ComponentFixture<LaoskywayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaoskywayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaoskywayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
