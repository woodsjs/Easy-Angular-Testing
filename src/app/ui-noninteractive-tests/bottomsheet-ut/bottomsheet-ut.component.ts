import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottomsheet-ut',
  templateUrl: './bottomsheet-ut.component.html',
  styleUrls: ['./bottomsheet-ut.component.css']
})
export class BottomsheetUtComponent implements OnInit {
  messages;
  testMessages = [
    { from: 'Fran', content: 'Is Jim around?' },
    { from: 'You', content: "Haven't seen him today" },
    { from: 'Fran', content: 'ugh, need him to look at some code' },
    { from: 'You', content: 'Anything I can do?' }
  ];

  // tslint:disable-next-line: variable-name
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit() {
    this.getMessages();
  }

  getMessages() {
    // this would be a call to an api...
    // to distinguish for our testing ,the names and such are
    // different than our mock data
    this.messages = this.testMessages;
  }

  openBottomSheet(): void {
    // tslint:disable-next-line: no-use-before-declare
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent, {
      data: this.messages
    });
  }
}

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottomsheet-example-sheet.html',
  styleUrls: ['./bottomsheet-ut.component.css']
})
export class BottomSheetOverviewExampleSheetComponent {
  messages;
  constructor(
    // tslint:disable-next-line: variable-name
    private _bottomSheetRef: MatBottomSheetRef<
      BottomSheetOverviewExampleSheetComponent
    >,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
  ) {
    this.getMessages();
  }

  getMessages() {
    this.messages = this.data;
  }
}
