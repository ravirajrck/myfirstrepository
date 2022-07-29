import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';
import { ElementRef } from '@angular/core';
import { Route } from '@angular/router';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  @ViewChild('addtocart', { static: true }) addtocart = {} as ElementRef;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public productservice: ProductServiceService
  ) {}

  product_id: any;
  product_data: any;
  added_product: any;
  added_product_list: any[] = [];
  orderdata: any[] = [];
  ngOnInit(): void {
    this.product_id = this.route.snapshot.params['id'];
    console.log(this.product_id);

    this.productservice.getproductbyid(this.product_id).subscribe((data) => {
      console.log(data);
      this.product_data = data;
      this.pro.id = this.product_data.id;
      this.pro.title = this.product_data.title;
      this.pro.image = this.product_data.image;
      this.pro.price = this.product_data.price;
      this.pro.description = this.product_data.description;
      this.pro.category = this.product_data.category;
      this.pro.rate = this.product_data.rating.rate;
      this.pro.count = this.product_data.rating.count;
      this.added_product = this.product_data;
    });

    //button check
    this.data = localStorage.getItem('data');
    if (this.data == null) {
      this.data = [];
    } else {
      this.added_product_list = JSON.parse(this.data);

      for (let i in this.added_product_list) {
        if (this.added_product_list[i].id == this.product_id) {
          this.addtocart.nativeElement.style.background = 'red';
          this.addtocart.nativeElement.disabled = 'true';
        }
      }
    }
  }

  id: any;
  title: any;
  image: any;
  price: any;
  description: any;
  category: any;
  rate: any;
  count: any;

  pro = {
    id: '',
    title: '',
    image: '',
    price: '',
    description: '',
    category: '',
    rate: '',
    count: '',
    quantity: 1,
    subtotal: '',
    total: '',
  };

  data: any;
  add_to_cart() {
    this.data = localStorage.getItem('data');
    if (this.data == null) {
      this.data = [];
    } else {
      this.added_product_list = JSON.parse(this.data);
    }
    this.pro.subtotal = this.pro.price;
    this.added_product_list.push(this.pro);
    localStorage.setItem('data', JSON.stringify(this.added_product_list));
    this.addtocart.nativeElement.style.background = 'red';
    this.addtocart.nativeElement.disabled = 'true';
  }

  checkout() {
    console.log('hi');

    this.router.navigate(['cart']);
  }
}
