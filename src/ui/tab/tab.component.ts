import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
        selector: 'ui-tab',
        templateUrl: './tab.component.html',
        styleUrls: ['./tab.component.scss']
    })
    export class UiTabComponent implements OnInit {
        isFirst: boolean = false;
        isLast: boolean = false;
        constructor() { }
        ngOnInit() {
    }
    setFirst() {
        this.isFirst = true;
        this.isLast = false;
    }
    setLast() {
        this.isFirst = false;
        this.isLast = true;
    }
}
