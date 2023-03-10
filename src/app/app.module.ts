import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { TestInterceptor } from './interceptor/test.interceptor';
 //1

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //2
  ],//multi tells module if were gonna have multiple interceptors
  providers: [{ provide :HTTP_INTERCEPTORS, useClass:TestInterceptor ,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
