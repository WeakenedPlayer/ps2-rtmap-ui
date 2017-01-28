import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UiMainComponent } from './ui-main/ui-main.component';
import { UiLandingComponent } from './ui-landing/ui-landing.component';
import { UiTabModule } from '../ui/tab/tab';

@NgModule({
  declarations: [
    AppComponent,
    UiMainComponent,
    UiLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UiTabModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule { }
