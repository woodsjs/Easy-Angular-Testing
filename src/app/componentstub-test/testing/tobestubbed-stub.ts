import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tobestubbed',
  template: '',
  styles: ['']
})
export class ToBeStubbedStubComponent implements OnInit {
  // This is coming from our parent, the functionality component, which will be under test
  @Input() inputData: string;

  // This is going out to our parent, the functionality component, which will be under test
  // See below where we trigger the emit in sendData() from the button in html
  @Output() sentData = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
      this.sendData('Stub sent data');
  }

  sendData(data: string) {
      this.sentData.emit(data);
  }
}

