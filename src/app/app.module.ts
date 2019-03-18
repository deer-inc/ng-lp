import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgLpModule } from '@deer-inc/ng-lp';
import { MonacoEditorModule } from 'ngx-monaco-editor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgLpModule,
    ReactiveFormsModule,
    MonacoEditorModule.forRoot({
      baseUrl: './assets'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
