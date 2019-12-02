import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-old-login',
  templateUrl: './old-login.component.html',
  styleUrls: ['./old-login.component.scss']
})
export class OldLoginComponent implements OnInit {

  login: string;
  psw: string;
  logged = false;

  constructor() { }

  ngOnInit() {
  }

  connexion(){
    // console.log('login : ', this.login);
    // console.log('password : ', this.psw);
    if (this.login === 'admin' && this.psw === 'admin'){
      this.logged = true;
    }
  }
}
