import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import IUser from '../models/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // login: string;
  login = 'Bret';
  psw: string;
  logged = false;
  message: string;
  error = false;

  // tslint:disable-next-line:variable-name
  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }

  ngOnInit() {
  }

  connexion() {

    this.http.get('https://jsonplaceholder.typicode.com/users/?username=' + this.login)
      .subscribe(  (value: IUser[]) => {
        if (value.length === 1) {
          this.logged = true;
          this.message = 'Bienvenue ' + this.login + ', vous êtes connecté.';
          this._snackBar.open(this.message, '', {
              duration: 2000,
            });
        } else {
          this.error = true;
        }

      }, (error1: HttpErrorResponse) => {
        console.error('error1', error1);
      });

  }
}
