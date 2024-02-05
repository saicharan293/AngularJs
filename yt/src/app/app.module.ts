import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CardModule,
    CommonModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
