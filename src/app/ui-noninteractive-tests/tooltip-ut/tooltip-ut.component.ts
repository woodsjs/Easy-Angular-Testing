import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-ut',
  templateUrl: './tooltip-ut.component.html',
  styleUrls: ['./tooltip-ut.component.css']
})
export class TooltipUtComponent implements OnInit {

  constructor() { }

  public tooltipText = 'bliggle';
  public inputTooltipText = 'blaggle';

  // the aria-describedby cannot hold more than 30 chars at the time of this writing
  // so let's do something long that would get cut off normally
  public changedInputTooltipText = 'You know what it\'s for, you just did the thing!';

  ngOnInit() {
    this.tooltipText = 'Hi y\'all!  I\'m the tooltip!';
    this.inputTooltipText = 'I\'m a fancy tolltip for an input box!';
  }

  onClick() {
    this.inputTooltipText = this.changedInputTooltipText;
  }
}
