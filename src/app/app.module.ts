import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponentComponent } from './log-component/log-component.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { OfLogComponentComponent } from './of-log-component/of-log-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponentComponent,
    MainComponentComponent,
    OfLogComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
