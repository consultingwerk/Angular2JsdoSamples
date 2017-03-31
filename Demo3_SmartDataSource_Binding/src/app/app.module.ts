import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SmartNgModule } from 'smartcomponent-library';
import { SmartComponentsCoreModule } from 'smartcomponent-library/core';
import { SmartDataSourceBindingComponent } from './smart-data-source-binding';
import { SmartDataSourceModule } from 'smartcomponent-library/smart-datasource';
import { SmartGridModule } from 'smartcomponent-library/smart-grid';

@SmartNgModule({
  smartConfig: {
    serviceURI: 'http://localhost:8820/web'
    
  },
  rootComponent: SmartDataSourceBindingComponent,
  imports: [
    SmartComponentsCoreModule,
    SmartDataSourceModule,
    SmartGridModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: []
})
export class AppModule { }
