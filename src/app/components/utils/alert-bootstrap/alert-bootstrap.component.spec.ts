import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBootstrapComponent } from './alert-bootstrap.component';

describe('AlertBootstrapComponent', () => {
  let component: AlertBootstrapComponent;
  let fixture: ComponentFixture<AlertBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
