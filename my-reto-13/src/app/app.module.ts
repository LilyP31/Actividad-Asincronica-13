import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RetoModule } from './reto/reto.module';
import { CurrencyPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RetoModule,
    CurrencyPipe


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
