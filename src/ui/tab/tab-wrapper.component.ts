import { Component, OnInit, OnChanges, SimpleChanges, Input, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'ui-tab-wrapper',
  templateUrl: './tab-wrapper.component.html',
  styleUrls: ['./tab-wrapper.component.scss'],
  animations: [
               trigger( 'tabState', [
                 state( 'closed', style( { transform: 'translateY(50px)' } ) ),
                 state( 'opened', style( { transform: 'translateY(200px)' } ) ),
                 transition( 'closed => opened', animate( '100ms ease-in' ) ),
                 transition( 'opened => closed', animate( '100ms ease-out' ) ),
               ] )
               ],
})
export class UiTabWrapperComponent implements OnInit{
    constructor() {
    }
    ngOnInit() {
    }
}
