import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

// This component is dynamically loaded, so make sure you add it into the
// module's entry components so you can get your ComponentFactory compiled in
@Component({
  selector: 'app-snackbar-ut-example',
  templateUrl: 'snackbar-ut-component-example.html',
  styleUrls: ['./snackbar-ut.component.css']
})
export class SnackbarUTExampleComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarUTExampleComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {}
}

@Component({
  selector: 'app-snackbar-ut',
  templateUrl: './snackbar-ut.component.html',
  styleUrls: ['./snackbar-ut.component.css']
})
export class SnackbarUtComponent implements OnInit {
  constructor(private _snackBar: MatSnackBar) {}

  ngOnInit() {}

  openSnackBarMessage() {
    this._snackBar.open('Snacking message', 'dismiss');
  }

  // We wanted a little pause here. Why? Because a nice use
  // of snackbar is for notifications that pop up in a browser
  // when some other process needs to notify the user!
  // Think of a private message type function that wants to tell
  // the user Hey! You just got a message!  While they're typing
  // data in a document.
  openSnackBarComponent() {
    setTimeout(() => {
      let snackbarRef = this._snackBar.openFromComponent(
        SnackbarUTExampleComponent,
        {
          duration: 5000,
          data: 'Hey! This took an extra second to show!'
        }
      );
    }, 1000);
  }
}
