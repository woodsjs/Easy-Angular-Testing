import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-select-radio-checkbox-ut',
  templateUrl: './select-radio-checkbox-ut.component.html',
  styleUrls: ['./select-radio-checkbox-ut.component.css']
})
export class SelectRadioCheckboxUtComponent implements OnInit {
  sides: string[] = ['Chips', 'Fruit', 'Salad', 'None'];
  extraList = [
    { id: 1, text: 'Meat' },
    { id: 10, text: 'Avocado' },
    { id: 11, text: 'Cilantro' }
  ];

  sandwichFormGroup;

  constructor() {}

  ngOnInit() {
    this.sandwichFormGroup = new FormGroup({
      sandwich: new FormControl(),
      side: new FormControl(),
      extras: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.extraList.forEach((o, i) => {
      const control = new FormControl(); // if first item set to true, else false
      (this.sandwichFormGroup.controls.extras as FormArray).push(control);
    });
  }

  onSubmit() {
    console.log('the output ', this.sandwichFormGroup);

    const selectedOrderIds = this.sandwichFormGroup.value.extras
      .map((v, i) => (v ? this.extraList[i].id : null))
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }
}
