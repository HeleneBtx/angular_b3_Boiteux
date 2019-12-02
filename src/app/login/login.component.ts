import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import IUser from './models/IUser';

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

  constructor(private _snackBar: MatSnackBar, private http: HttpClient) { }

  // openSnackBar(message: string, action: string) {
  //   if (this.login === 'admin' && this.psw === 'admin') {
  //     message = 'ok';
  //   } else {
  //     message = 'pas ok';
  //   }
  //   this._snackBar.open(message, action, {
  //     duration: 2000,
  //   });
  // }

  ngOnInit() {

  }

  connexion(){
    // deb spinner

    this.http.get('http://jsonplaceholder.typicode.com/users/?username=' + this.login)
      .subscribe(  (value: IUser[]) => {
        if (value.length === 1) {
          console.log(value[0].company.name);
          this.logged = true;
          this.message = 'Bienvenue ' + this.login + ', vous êtes connecté.';
          this._snackBar.open(this.message, '', {
              duration: 2000,
            });
          // fin spinner
        }
        // console.log('get: ' + this.login, value.length);
      }, (error1: HttpErrorResponse) => {
        console.error('error1', error1);
        // fin spinner
      });

    // console.log('login : ', this.login);
    // console.log('password : ', this.psw);
    // if (this.login === 'admin' && this.psw === 'admin'){
    //   this.logged = true;
    //   this.message = 'ok';
    // } else {
    //   this.message = 'pas ok';
    // }
    // this._snackBar.open(this.message, '', {
    //   duration: 2000,
    // });
  }
}
