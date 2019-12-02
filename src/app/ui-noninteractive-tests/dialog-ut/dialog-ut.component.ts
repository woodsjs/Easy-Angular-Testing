import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template:
    '<h1 mat-dialog-title>Really Delete?<h1>\
    <div mat-dialog-content>{{data}} will be permanantly deleted.<div>\
    <div mat-dialog-actions>\
    <button mat-button (click)="onNoClick()">No Thanks</button>\
    <button mat-button [mat-dialog-close]="data" cdkFocusInitial>Ok</button>\
    </div>'
})
export class DialogOverviewExampleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-dialog-ut',
  templateUrl: './dialog-ut.component.html',
  styleUrls: ['./dialog-ut.component.css']
})
export class DialogUtComponent implements OnInit {
  ourItems = ['thing one', 'thing two', 'thing three'];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  getThings() {
    return this.ourItems.slice();
  }

  removeThing(thingName) {
    // this is where we would put code to act on removing the item
    console.log('removing ', thingName);
  }
  onDelete(item) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      // this should be the name of our selected item
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result ) {
        this.removeThing(result);
      }
    });
  }
}
