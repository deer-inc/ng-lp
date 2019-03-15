import { NgModule } from '@angular/core';
import { NgLpComponent } from './ng-lp.component';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  declarations: [NgLpComponent],
  imports: [
    BrowserModule,
    SafePipeModule
  ],
  exports: [NgLpComponent]
})
export class NgLpModule { }
