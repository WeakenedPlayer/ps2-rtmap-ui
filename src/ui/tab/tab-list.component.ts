import { Component, OnInit, AfterViewInit, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { UiTabComponent } from './tab.component';
@Component({
  selector: 'ui-tab-list',
  //templateUrl: './tab-list.component.html',
  template: '<div class="ui-tab-list horizontal-top"><ng-content></ng-content></div>',
  styleUrls: ['./tab.component.scss']
})
export class UiTabListComponent implements OnInit, AfterViewInit {
    @ContentChildren( UiTabComponent ) tabs: QueryList<UiTabComponent>;
    constructor() {
        
    }
    ngOnInit() {
        console.log('1');
        console.log( this.tabs );
    }
    
    ngAfterViewInit() {
        console.log('2');
        console.log( this.tabs );
    }
}



/* ------------------------------------------------------------------------------------------------
Reference
[1] https://angular.io/docs/ts/latest/api/core/index/ContentChildren-decorator.html
http://stackoverflow.com/questions/36755844/angular2-child-component-as-data/36760027#36760027
------------------------------------------------------------------------------------------------ */