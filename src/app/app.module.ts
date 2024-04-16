import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, CommonModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
