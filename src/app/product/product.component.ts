import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(public productservice: ProductServiceService) {}

  all_products: any;
  categories: any;
  ngOnInit(): void {
    this.productservice.getproduct().subscribe((data) => {
      this.all_products = data;
      console.log(this.all_products);
    });

    this.productservice.getproductcategory().subscribe((data) => {
      console.log(data);
      this.categories = data;
    });
  }

  category(value: any) {
    console.log(value);
    if (value == 'all') {
      this.productservice.getproduct().subscribe((data) => {
        this.all_products = data;
        console.log(this.all_products);
      });
    } else {
      this.productservice.getproductbycatagoryname(value).subscribe((data) => {
        console.log(data);
        this.all_products = data;
      });
    }
  }

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
  };

  product_data: any;
  added_product: any;
  data: any;
  added_product_list: any[] = [];
  add_to_cart(product_id: string) {
    console.log(product_id);

    this.data = localStorage.getItem('data');
    if (this.data == null) {
      this.data = [];
    } else {
      this.added_product_list = JSON.parse(this.data);
    }

    this.productservice.getproductbyid(product_id).subscribe((data2) => {
      console.log('434');
      console.log(data2);
      this.product_data = data2;
      this.pro.id = this.product_data.id;
      this.pro.title = this.product_data.title;
      this.pro.image = this.product_data.image;
      this.pro.price = this.product_data.price;
      this.pro.description = this.product_data.description;
      this.pro.category = this.product_data.category;
      this.pro.rate = this.product_data.rating.rate;
      this.pro.count = this.product_data.rating.count;
      this.added_product = this.product_data;

      this.pro.subtotal = this.pro.price;
      this.added_product_list.push(this.pro);
      localStorage.setItem('data', JSON.stringify(this.added_product_list));
    });
  }
}
