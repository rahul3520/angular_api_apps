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
import { UserDataComponent } from './user-data/user-data.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesComponent } from './quotes/quotes.component';

import { HttpClientModule } from '@angular/common/http'

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
  },
  {
    path:"userData",
    component:UserDataComponent
  },
  {
    path:"todos",
    component:TodoComponent
  },
  {
    path:"quotes",
    component:QuotesComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    PassengerApiComponent,
    USpublicDataComponent,
    UserInfoComponent,
    ProductListComponent,
    NavBarComponent,
    UserDataComponent,
    TodoComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
