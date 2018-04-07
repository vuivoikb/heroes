import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FlowerComponent } from './flower/flower.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { HoatuoiComponent } from './hoatuoi/hoatuoi.component';
import { ShopComponent } from './shop/shop.component';
import { MessageService } from './message.service';
import { DataService } from './data.service';
import { ProductManagerComponent } from './product-manager/product-manager.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlowerComponent,
    DetailComponent,
    HomeComponent,
    HoatuoiComponent,
    ShopComponent,
    ProductManagerComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [ MessageService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
