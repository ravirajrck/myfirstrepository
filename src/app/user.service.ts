import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  getusers() {
    return this.http.get('https://fakestoreapi.com/users');
  }
}
