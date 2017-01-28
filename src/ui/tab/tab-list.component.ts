import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { UiTabComponent } from './tab.component';

@Component({
  selector: 'ui-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class UiTabListComponent implements OnInit, AfterContentInit {
    // 子要素のtab群
    @ContentChildren( UiTabComponent ) tabs: QueryList<UiTabComponent>;
    
    constructor() {}
    ngOnInit() {}
    
    ngAfterContentInit() {
        // 子要素のtabの先頭と末尾のみ特別にfirst/lastフラグをセットする。(他にあんがあれば見直す)
        this.tabs.first.setFirst();
        this.tabs.last.setLast();
    }
}

/* ------------------------------------------------------------------------------------------------
参考
[1] https://angular.io/docs/ts/latest/api/core/index/ContentChildren-decorator.html
[2] http://stackoverflow.com/questions/36755844/angular2-child-component-as-data/36760027#36760027
[3] https://toddmotto.com/transclusion-in-angular-2-with-ng-content
------------------------------------------------------------------------------------------------ */
