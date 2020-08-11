import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import  { Injector} from '@angular/core';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {

  }
  ngDoBootstrap(){
  const el = createCustomElement(AppComponent, { injector: this.injector });
  customElements.define('widget-app', el);
  }
  
}
