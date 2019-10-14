import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-ut',
  templateUrl: './tooltip-ut.component.html',
  styleUrls: ['./tooltip-ut.component.css']
})
export class TooltipUtComponent implements OnInit {

  constructor() { }

  public tooltipText = 'bliggle';

  ngOnInit() {
    this.tooltipText = 'Hi y\'all!  I\'m the tooltip!';
  }

  onClick() {
    this.tooltipText = 'You know what it\'s for, you just did the thing!';
  }

}
