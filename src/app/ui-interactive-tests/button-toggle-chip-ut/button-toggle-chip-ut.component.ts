import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-toggle-chip-ut',
  templateUrl: './button-toggle-chip-ut.component.html',
  styleUrls: ['./button-toggle-chip-ut.component.css']
})
export class ButtonToggleChipUtComponent implements OnInit {
  medForm: FormGroup;
  under13 = false;
  speakToParent = false;

  constructor() {
    this.medForm = new FormGroup({
      ageGroup: new FormControl(''),
      legalGuardian: new FormControl(''),
      speakToParents: new FormControl(''),
      originCountry: new FormControl(''),
      gender: new FormControl('')
    });
  }

  ngOnInit() {
    this.medForm.removeControl('legalGuardian');
    this.medForm.removeControl('speakToParents');
  }

  onSubmit() {
    console.log('form submitted ', this.medForm.value);
  }

  ageCheck() {
    console.log('Our age is ', this.medForm.controls.ageGroup.value);
    const ageSelection = parseInt(this.medForm.controls.ageGroup.value, 10);

    // we would do this a bit differently in the "real world"
    if (ageSelection === 1) {
      this.medForm.addControl('legalGuardian', new FormControl(''));
      this.under13 = true;
      this.speakToParent = false;
    } else if (ageSelection === 13) {
      this.medForm.addControl('speakToParents', new FormControl(''));
      this.speakToParent = true;
      this.under13 = false;
    } else {
      this.under13 = false;
      this.speakToParent = false;
    }
  }
}
