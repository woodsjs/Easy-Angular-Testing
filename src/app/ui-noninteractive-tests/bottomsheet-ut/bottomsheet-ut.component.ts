import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottomsheet-ut',
  templateUrl: './bottomsheet-ut.component.html',
  styleUrls: ['./bottomsheet-ut.component.css']
})
export class BottomsheetUtComponent implements OnInit {
  // tslint:disable-next-line: variable-name
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit() {}

  openBottomSheet(): void {
    // tslint:disable-next-line: no-use-before-declare
    this._bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }
}

@Component({
  selector: 'app-bottom-sheet-overview-example-sheet',
  templateUrl: 'bottomsheet-example-sheet.html',
  styleUrls: ['./bottomsheet-ut.component.css']
})
export class BottomSheetOverviewExampleSheetComponent {
  messages = [
    { from: 'Jim', content: 'Do you have the new file?' },
    { from: 'You', content: 'I don\'t, can you resend?' },
    { from: 'Jim', content: 'Yep. Just sent. Let me know if you get it.' },
    { from: 'You', content: 'Got it, thanks!' }
  ];
  constructor(
    // tslint:disable-next-line: variable-name
    private _bottomSheetRef: MatBottomSheetRef<
      BottomSheetOverviewExampleSheetComponent
    >
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
