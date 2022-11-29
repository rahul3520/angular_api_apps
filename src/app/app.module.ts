import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassengerApiComponent } from './passenger-api/passenger-api.component';
import { USpublicDataComponent } from './uspublic-data/uspublic-data.component';

@NgModule({
  declarations: [
    AppComponent,
    PassengerApiComponent,
    USpublicDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
