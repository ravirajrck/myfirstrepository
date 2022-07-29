import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    public productservice: ProductServiceService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  all_products: any;

  category(value: string) {
    console.log(value);
  }

  home() {
    this.productservice.getproduct().subscribe((data) => {
      console.log(data);
      this.all_products = data;
      this.router.navigate(['product']);
    });
  }

  cart() {
    this.router.navigate(['cart']);
  }
}
