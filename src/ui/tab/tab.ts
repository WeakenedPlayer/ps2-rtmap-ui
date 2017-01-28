import { NgModule } from '@angular/core';
import { UiTabComponent } from './tab.component';
import { UiTabListComponent } from './tab-list.component';

@NgModule({
  declarations: [
    UiTabComponent,
    UiTabListComponent
  ],
  exports: [
                 UiTabComponent,
                 UiTabListComponent
               ],
  imports: [
  ],
  providers: [],
  bootstrap: []
})
export class UiTabModule { }
