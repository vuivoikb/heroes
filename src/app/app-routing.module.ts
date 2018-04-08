import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import{RouterModule,Routes}from'@angular/router';
import{BrowserModule} from '@angular/platform-browser';
import{HomeComponent} from './home/home.component';
import{HoatuoiComponent} from './hoatuoi/hoatuoi.component';
import{ShopComponent} from './shop/shop.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';

const routes:Routes =[
  { path:'home',component:HomeComponent },
  { path:'hoatuoi',component:HoatuoiComponent },
  { path:'shop',component:ShopComponent },
  { path:'admin',component:ProductManagerComponent }
]

@NgModule({
  imports: [
    CommonModule,
  RouterModule.forRoot(routes)
  ],
  
exports:[RouterModule]
})
export class AppRoutingModule { }
