import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import IUser from '../models/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: IUser[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      users => this.users = users
    );
  }

}
