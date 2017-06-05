import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SmartComponentLibraryModule } from '@consultingwerk/smartcomponent-library';
import { SmartDataSourceBindingComponent } from './smart-data-source-binding';
import { SmartFormOutletComponent, SmartAppRootComponent } from "@consultingwerk/smartcomponents-core";

@NgModule({
  imports: [
    SmartComponentLibraryModule.forRoot({
      serviceURI: 'http://192.168.0.44:8820/web',
      credentials: {
        username: 'demo',
        password: 'demo'
      },
      defaultRoute: 'demo',
      smartControllers: [SmartDataSourceBindingComponent]
    }),
    RouterModule.forRoot([{
      path: 'demo',
      outlet: 'view',
      component: SmartFormOutletComponent,
      data: {
        ViewUri: 'http://localhost:4200/assets/demo.template.html',
        ControllerName: 'DemoController'
      }
    }]),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  declarations: [AppComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
