import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(public http: HttpClient) {}

  getcart() {
    return this.http.get('https://fakestoreapi.com/carts');
  }
}
