import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { User } from '../models/user';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpOptions= {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const api_url = environment.base_url + '/users'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  addUser(user): Observable<User> {
    return this.http.post<User>(api_url, user, httpOptions);
  }

  getUser() : Observable<User[]> {
    return this.http.get<User[]>(api_url);
  }

  getUserById(id: number) : Observable<User> {
    const url = `${api_url}/${id}`;
    return this.http.get<User>(url);
  }

}
