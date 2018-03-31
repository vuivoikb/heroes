import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

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



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlowerComponent,
    DetailComponent,
    HomeComponent,
    HoatuoiComponent,
    ShopComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ MessageService, DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
