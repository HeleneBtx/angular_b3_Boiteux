import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import IUser from '../models/IUser';

@Injectable()
export class UsersService {

  constructor(protected http: HttpClient) {}

  usersUrl = 'https://jsonplaceholder.typicode.com/users';

  // GET
  public getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.usersUrl);
  }

}


