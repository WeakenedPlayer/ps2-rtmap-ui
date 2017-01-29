import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isTabOpened: boolean = true;
    mode: string='continentSelect';

    continentSelect(){
        this.switchMode( 'continentSelect' );
    }
    markerSelect(){
        this.switchMode( 'markerSelect' );
    }
    setting(){
        this.switchMode( 'setting' );
    }
    
    switchMode( nextMode: string ) {
        if( nextMode !== this.mode ) {
            this.isTabOpened = false;
            this.mode = nextMode;
        } else {
            this.isTabOpened = !this.isTabOpened;
        }
    }
}
