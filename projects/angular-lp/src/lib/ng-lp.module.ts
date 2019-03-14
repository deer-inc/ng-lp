import { NgModule } from '@angular/core';
import { NgLpComponent } from './ng-lp.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [NgLpComponent],
  imports: [
    BrowserModule
  ],
  exports: [NgLpComponent]
})
export class NgLpModule { }
