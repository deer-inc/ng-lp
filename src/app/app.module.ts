import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgLpModule } from 'projects/angular-lp/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgLpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
