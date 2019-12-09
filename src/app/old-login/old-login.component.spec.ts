import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldLoginComponent } from './old-login.component';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

describe('OldLoginComponent', () => {
  let component: OldLoginComponent;
  let fixture: ComponentFixture<OldLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldLoginComponent ],
      imports: [
        FormsModule
      ]
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
