import { Component, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(public cart: CartService) {}

  data: any;
  total = 0;
  totalquantity = 0;
  added_product_list: any[] = [];

  ngOnInit(): void {
    this.data = localStorage.getItem('data');
    this.data = JSON.parse(this.data);
    console.log(this.data);
    if (this.data == null) {
      this.data = [];
    }
    console.log(this.data);
    this.added_product_list = this.data;
    for (let x in this.added_product_list) {
      this.total += parseInt(this.added_product_list[x].subtotal);
      this.totalquantity += parseInt(this.added_product_list[x].quantity);
    }
  }

  decrease(i: any) {
    if (this.added_product_list[i].quantity > 1) {
      this.total = 0;
      this.totalquantity = 0;
      this.added_product_list[i].quantity--;
      this.added_product_list[i].subtotal =
        this.added_product_list[i].price * this.added_product_list[i].quantity;
      localStorage.setItem('data', JSON.stringify(this.added_product_list));
      for (let x in this.added_product_list) {
        this.total += parseInt(this.added_product_list[x].subtotal);
        this.totalquantity += parseInt(this.added_product_list[x].quantity);
      }
    }
  }

  increase(i: any) {
    this.total = 0;
    this.totalquantity = 0;
    this.added_product_list[i].quantity++;
    this.added_product_list[i].subtotal =
      this.added_product_list[i].price * this.added_product_list[i].quantity;
    localStorage.setItem('data', JSON.stringify(this.added_product_list));
    for (let x in this.added_product_list) {
      this.total += parseInt(this.added_product_list[x].subtotal);
      this.totalquantity += parseInt(this.added_product_list[x].quantity);
    }
  }

  remove(i: any) {
    this.added_product_list.splice(i, 1);
    localStorage.setItem('data', JSON.stringify(this.added_product_list));
  }
}

// ng generate module customers --route customers --module app.module
// ng g m auth --routing=true --module app.module && ng g c auth
