import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-overview-example-dialog',
  template:
    '<h1 mat-dialog-title>Really Delete?<h1>\
    <div mat-dialog-content id="dataMessage">{{data}} will be permanantly deleted.<div>\
    <div mat-dialog-actions>\
    <button mat-button id="noThanks" (click)="onNoClick()">No Thanks</button>\
    <button mat-button [mat-dialog-close]="data" id="doIt" cdkFocusInitial>Ok</button>\
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
export class DialogUtComponent {
  ourItems = ['thing one', 'thing two', 'thing three'];

  constructor(public dialog: MatDialog) {}

  onDelete(item) {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      // this should be the name of our selected item
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      if ( result ) {
            // this would be a direct call to a service (yuch),
            // or better a call to a method that calls a service and deletes the item
            // we would then mock the service and look for calls to it
            console.log('removing ', result);
      }
    });
  }
}
