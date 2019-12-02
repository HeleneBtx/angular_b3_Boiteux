import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldLoginComponent } from './old-login.component';

describe('OldLoginComponent', () => {
  let component: OldLoginComponent;
  let fixture: ComponentFixture<OldLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
