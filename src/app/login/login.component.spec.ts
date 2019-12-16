import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatSnackBarModule, MatToolbarModule} from '@angular/material';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let httpTestingController: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MatInputModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatToolbarModule,
        HttpClientTestingModule,
        FormsModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    httpTestingController = TestBed.get(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('good init', () => {
    expect(component.logged).toBeFalsy();
    expect(component.login).toEqual('Bret');
  });

  it('connexion done', () => {
    // test l'initialisation du test
    expect(component.logged).toBeFalsy();
    expect(component.error).toBeFalsy();
    expect(component.login).toEqual('Bret');

    // execution de la methode de test
    component.connexion();

    // attend toi a avoir une requete GET (par defaut) sur telle URL
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/?username=' + component.login);

    // repond a la requete avec telle response
    req.flush([{}]);

    // verification que toutes les requetes soient traitees
    httpTestingController.verify();

    // test le bon deroulement du test
    expect(component.logged).toBeTruthy();
    expect(component.error).toBeFalsy();

  });

  it('connexion not done', () => {
    // test l'initialisation du test
    expect(component.logged).toBeFalsy();
    expect(component.error).toBeFalsy();
    // expect(component.login).toEqual('Bret');

    // execution de la methode de test
    component.connexion();

    // attend toi a avoir une requete GET (par defaut) sur telle URL
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users/?username=' + component.login);

    // repond a la requete avec telle response
    req.flush([]);

    // verification que toutes les requetes soient traitees
    httpTestingController.verify();

    // test le bon deroulement du test
    expect(component.logged).toBeFalsy();
    expect(component.error).toBeTruthy();

  });
});
