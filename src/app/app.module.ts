import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {routes} from './app.routes';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

import {LoginService} from './services/login.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavTopComponent } from './components/nav-top/nav-top.component';
import { NavLeftComponent } from './components/nav-left/nav-left.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavTopComponent,
    NavLeftComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
