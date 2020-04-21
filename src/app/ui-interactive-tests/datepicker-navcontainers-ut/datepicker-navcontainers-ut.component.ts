import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker-navcontainers-ut',
  templateUrl: './datepicker-navcontainers-ut.component.html',
  styleUrls: ['./datepicker-navcontainers-ut.component.css']
})
export class DatepickerNavcontainersUtComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  monthSelectedHandler(event) {
    console.log('Month selected ', event);
  }

  yearSelectedHandler(event) {
    console.log('Year selected ', event);
  }

  dateInputHandler(event) {
    console.log('Date Inputted ', event);
  }
}


// https://material.io/components/navigation-drawer#
// https://material.angular.io/components/sidenav/overview
// https://material.angular.io/components/toolbar/overview
// https://material.angular.io/components/menu/overview
// https://material.angular.io/components/datepicker/overview
// https://material.io/components/pickers
