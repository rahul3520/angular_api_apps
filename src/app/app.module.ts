import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerApiComponent } from './passenger-api/passenger-api.component';
import { USpublicDataComponent } from './uspublic-data/uspublic-data.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';


const myRoute:Routes=[
  {
    path:"",
    component:PassengerApiComponent
  },
  {
    path:"product",
    component:ProductListComponent
  },
  {
    path:"userInfo",
    component:UserInfoComponent
  },
  {
    path:"usPublicData",
    component:USpublicDataComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    PassengerApiComponent,
    USpublicDataComponent,
    UserInfoComponent,
    ProductListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
