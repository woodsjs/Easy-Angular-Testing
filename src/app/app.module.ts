import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivatedRouteTestCompComponent } from './activatedroute-tests/activatedroute-test/activatedroute-test';
import { RouterlinkTestComponent } from './routerlink-tests/routerlink-test/routerlink-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ActivatedRouteTestCompComponent,
    RouterlinkTestComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
