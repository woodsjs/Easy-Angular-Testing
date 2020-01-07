import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-button-toggle-chip-ut',
  templateUrl: './button-toggle-chip-ut.component.html',
  styleUrls: ['./button-toggle-chip-ut.component.css']
})
export class ButtonToggleChipUtComponent implements OnInit {

  medForm: FormGroup;

  constructor() {
    this.medForm = new FormGroup({
      ageGroup: new FormControl(''),
      originCountry: new FormControl(''),
      gender: new FormControl('')
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('form submitted ', this.medForm.value);
  }

}
