import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-datepicker-navcontainers-ut',
  templateUrl: './datepicker-navcontainers-ut.component.html',
  styleUrls: ['./datepicker-navcontainers-ut.component.css'],
})
export class DatepickerNavcontainersUtComponent implements OnInit {
  startDate = new Date(1950, 0, 1);
  ourMonth = 'january';

  // not good!
  @ViewChild('january') january: TemplateRef<any>;
  @ViewChild('february') february: TemplateRef<any>;
  @ViewChild('march') march: TemplateRef<any>;
  @ViewChild('april') april: TemplateRef<any>;
  @ViewChild('may') may: TemplateRef<any>;
  @ViewChild('june') june: TemplateRef<any>;
  @ViewChild('july') july: TemplateRef<any>;
  @ViewChild('august') august: TemplateRef<any>;
  @ViewChild('september') september: TemplateRef<any>;
  @ViewChild('october') october: TemplateRef<any>;
  @ViewChild('november') november: TemplateRef<any>;
  @ViewChild('december') december: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  monthSelectedHandler(event) {
    console.log('Month selected ', event);
  }

  yearSelectedHandler(event) {
    console.log('Year selected ', event);
  }

  dateInputHandler(event) {
    console.log('Date Inputted ', event);
  }

  dateChangeHandler(event: MatDatepickerInputEvent<Date>) {
      this.ourMonth = event.value.toLocaleString('default', { month: 'long' }).toLowerCase();
  }
}

// https://material.io/components/navigation-drawer#
// https://material.angular.io/components/sidenav/overview
// https://material.angular.io/components/toolbar/overview
// https://material.angular.io/components/menu/overview
// https://material.angular.io/components/datepicker/overview
// https://material.io/components/pickers
