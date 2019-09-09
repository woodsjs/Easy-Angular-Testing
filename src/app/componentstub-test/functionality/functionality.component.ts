import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-functionality',
  templateUrl: './functionality.component.html',
  styleUrls: ['./functionality.component.css']
})
export class FunctionalityComponent implements OnInit {

  // This will eventually come from our stub, and is shown in the template
  inputData: string;
  outputData: string;

  constructor() { }

  ngOnInit() {
    this.outputData = 'Functionality component output data';
  }

  // This processes the data coming from our stub when triggered
  onDataReceived(data: string) {
    this.inputData = data;
  }
}
