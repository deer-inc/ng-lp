import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgLpModule } from 'ng-lp';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgLpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
