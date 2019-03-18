import { NgModule } from '@angular/core';
import { NgLpComponent } from './ng-lp.component';
import { BrowserModule } from '@angular/platform-browser';
import { SafePipeModule } from 'safe-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [NgLpComponent],
  imports: [
    BrowserModule,
    SafePipeModule,
    FontAwesomeModule
  ],
  exports: [NgLpComponent]
})
export class NgLpModule { }
