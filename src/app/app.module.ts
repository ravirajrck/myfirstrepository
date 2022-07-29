import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { AuthModule } from './auth/auth.module';
//import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailsComponent,
    HeaderComponent,
    CartComponent,
    UserComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    /* ToastrModule.forRoot({
     timeOut: 15000, // 15 seconds
     closeButton: true,
     progressBar: true,
   }), */
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
