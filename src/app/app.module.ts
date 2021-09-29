import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ItemselectedComponent } from './components/itemselected/itemselected.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { Page404Component } from './components/shared/page404/page404.component';
import { CardSummaryComponent } from './components/itemselected/card-summary/card-summary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemselectedComponent,
    CheckoutComponent,
    NavbarComponent,
    Page404Component,
    CardSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
