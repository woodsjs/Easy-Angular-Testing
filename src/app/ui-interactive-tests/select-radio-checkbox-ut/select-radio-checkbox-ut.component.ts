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
    { id: 1, text: 'Xtra Meat' },
    { id: 10, text: 'Avocado' },
    { id: 11, text: 'Cilantro' }
  ];
  extrasAvailable = [];

  // This would come from an API! We don't want to have to make a code change
  // to add an item
  sandwichList = [
    { name: 'veggie', text: 'Veggie', type: 'nonMeat' },
    { name: 'beef', text: 'Beef', type: 'meat' },
    { name: 'grilledChicken', text: 'Grilled Chicken', type: 'meat' },
    { name: 'grilledFish', text: 'Grilled Fish', type: 'meat' },
    { name: 'chickenSalad', text: 'Chicken Salad', type: 'meat' },
    { name: 'tunaSalad', text: 'Tuna Salad', type: 'meat' }
  ];

  sandwichFormGroup;
  sandwichOrder;

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
    // clear our extras before we reFill it
    this.extrasAvailable.splice(0, this.extrasAvailable.length);

    const nonMeat = this.sandwichList
      .map(v => (v.type === 'nonMeat' ? v.name : null))
      .filter(v => v !== null);

    this.extraList.forEach((o, i) => {
      const sandwichType = this.sandwichFormGroup.controls.sandwich.value;
      // we need to trigger checkboxes when a sandwich is selected
      // if it's a non-meat sammy, don't have the xtra meat option

      if (nonMeat.includes(sandwichType) === false) {
        const control = new FormControl();
        (this.sandwichFormGroup.controls.extras as FormArray).push(control);
        this.extrasAvailable.push({ id: o.id, text: o.text });
      } else {
        if ([1].indexOf(o.id) < 0) {
          const control = new FormControl();
          (this.sandwichFormGroup.controls.extras as FormArray).push(control);
          this.extrasAvailable.push({ id: o.id, text: o.text });
        }
      }
    });
  }

  selectionChanged(selected) {
    // we can use this on ng 8
    // (this.sandwichFormGroup.controls.extras as FormArray).clear();
    while (this.sandwichFormGroup.controls.extras.length > 0) {
      this.sandwichFormGroup.controls.extras.removeAt(0);
    }

    this.addCheckboxes();
  }

  onSubmit() {
    const selectedOrderIds = this.sandwichFormGroup.value.extras
      .map((v, i) => (v ? this.extraList[i].id : null))
      .filter(v => v !== null);

    this.sandwichOrder = this.sandwichFormGroup.value;
    console.log('the sandwich order ', this.sandwichOrder);
  }
}
