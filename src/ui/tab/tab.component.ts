import { Component, OnInit } from '@angular/core';

@Component({
        selector: 'ui-tab',
        templateUrl: './tab.component.html',
        styleUrls: ['./tab.component.scss']
})
export class UiTabComponent implements OnInit {
    isFirst: boolean = false;
    isLast: boolean = false;

    constructor() { }
    ngOnInit() { }
    
    // 先頭と最後は角を丸める必要があるのでフラグをセットする。
    // CSSやngForを使った良い処理が分からないため、暫定敵に処置
    setFirst() {
        this.isFirst = true;
        this.isLast = false;
    }
    setLast() {
        this.isFirst = false;
        this.isLast = true;
    }
}

/* ------------------------------------------------------------------------------------------------
注意点
[1] ui-tab-listの子要素であること
[2] ui-tab-listから、先頭と末尾の要素に対してsetFirst/setLastをコールすること。
[3] tabのスタイルシートの有効範囲はテンプレート内に限る。tabを利用する側からは利用できないので注意。
　　　　(<a>の下線が消せないトラブル) 
------------------------------------------------------------------------------------------------ */