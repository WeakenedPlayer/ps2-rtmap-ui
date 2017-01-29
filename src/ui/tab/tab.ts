import { NgModule } from '@angular/core';
import { UiTabComponent } from './tab.component';
import { UiTabListComponent } from './tab-list.component';
import { UiTabContainerComponent } from './tab-container.component';;
import { UiTabWrapperComponent } from './tab-wrapper.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [ UiTabComponent, UiTabListComponent, UiTabContainerComponent, UiTabWrapperComponent ],
    exports: [ UiTabComponent, UiTabListComponent, UiTabContainerComponent, UiTabWrapperComponent　],
    imports: [ BrowserModule ],
    providers: [],
    bootstrap: []
})
export class UiTabModule { }

/* ------------------------------------------------------------------------------------------------
注意点
[1] BrowserModuleのimportを忘れないこと。NgClassが使えないエラーになる。
------------------------------------------------------------------------------------------------ */