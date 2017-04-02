import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
    serviceURI: 'http://localhost:8820/web',
    credentials: {
      username: 'demo',
      password: 'demo'
    }
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
  providers: [],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
