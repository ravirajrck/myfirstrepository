import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(private http: HttpClient) {}

  getproduct() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getproductbyid(id: string) {
    return this.http.get('https://fakestoreapi.com/products' + '/' + id);
  }

  // product category
  getproductcategory() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getproductbycatagoryname(categoryname: any) {
    return this.http.get(
      'https://fakestoreapi.com/products/category/' + categoryname
    );
  }
}
