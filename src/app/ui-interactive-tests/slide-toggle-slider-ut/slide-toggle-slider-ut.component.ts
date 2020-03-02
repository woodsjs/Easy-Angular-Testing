import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-toggle-slider-ut',
  templateUrl: './slide-toggle-slider-ut.component.html',
  styleUrls: ['./slide-toggle-slider-ut.component.css']
})
export class SlideToggleSliderUtComponent implements OnInit {
  redChecked = false;
  greenChecked = false;
  blueChecked = false;
  redDisabled = false;
  greenDisabled = false;
  blueDisabled = false;

  redValue = 125;
  greenValue = 125;
  blueValue = 125;

  constructor() {}

  ngOnInit() {
    this.changeColorValue();
  }

  changeColorValue() {
    const el = document.getElementById('colorSelection');

    console.log('color is ', el.style.backgroundColor);

    const bgColor =
      'rgb(' +
      this.redValue +
      ', ' +
      this.greenValue +
      ', ' +
      this.blueValue +
      ')';

    console.log('background color will be ', bgColor);
    el.style.backgroundColor = bgColor;

    console.log('and is ', el.style.backgroundColor);
  }
}
