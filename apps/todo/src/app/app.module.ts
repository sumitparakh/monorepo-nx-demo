import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    BrowserAnimationsModule,
    HeaderModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
