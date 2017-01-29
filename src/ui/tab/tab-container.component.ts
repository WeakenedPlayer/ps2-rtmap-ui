import { Component, OnInit, OnChanges, SimpleChanges, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'ui-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss'],
  animations: [
    trigger( 'tabState', [
      state( 'closed', style( { transform: 'translateY(0)' } ) ),
      state( 'opened', style( { transform: 'translateY(-110%)' } ) ),
      transition( 'closed => opened', animate( '100ms ease-in' ) ),
      transition( 'opened => closed', animate( '100ms ease-out' ) ),
    ] )
    ],
})
export class UiTabContainerComponent implements OnInit, OnChanges {
    @Input() isOpened: boolean = true;
    tabState: string = 'opened';
    constructor() {
        
    }
    ngOnInit() {
    }

    ngOnChanges( changes: SimpleChanges ) {
        this.tabState = this.isOpened ? 'opened' : 'closed';
        console.log( this.tabState );
    }
}
