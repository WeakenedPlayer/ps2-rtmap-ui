import { Component, OnInit, AfterViewInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { UiTabComponent } from './tab.component';
@Component({
  selector: 'ui-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class UiTabListComponent implements OnInit, AfterViewInit {
    @ContentChildren( UiTabComponent ) tabTitles: QueryList<UiTabComponent>;
    constructor() {
        
    }
    ngOnInit() {
        console.log( this.tabTitles );
    }
    
    ngAfterViewInit() {
        console.log( this.tabTitles );
    }
}



/* ------------------------------------------------------------------------------------------------
Reference
[1] https://angular.io/docs/ts/latest/api/core/index/ContentChildren-decorator.html
http://stackoverflow.com/questions/36755844/angular2-child-component-as-data/36760027#36760027
https://toddmotto.com/transclusion-in-angular-2-with-ng-content
------------------------------------------------------------------------------------------------ */