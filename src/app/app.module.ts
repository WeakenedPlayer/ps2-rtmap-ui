import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UiMainComponent } from './ui-main/ui-main.component';
import { UiToolbarComponent } from './ui-toolbar/ui-toolbar.component';
import { UiLandingComponent } from './ui-landing/ui-landing.component';

@NgModule({
  declarations: [
    AppComponent,
    UiMainComponent,
    UiToolbarComponent,
    UiLandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
