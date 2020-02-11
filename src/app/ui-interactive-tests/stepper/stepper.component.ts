import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  addressFormGroup: FormGroup;
  paymentFormGroup: FormGroup;
  orderFormGroup: FormGroup;

  itemsInCart = [
    { name: 'Become a SuperHero Coder', author: 'Ja, Nin', cost: 1000.0 },
    {
      name: 'Learn Angular in 24 Seconds',
      author: 'Codesalot, Suzy',
      cost: 4242.0
    },
    {
      name: 'The Perils of Imposter Syndrome',
      author: 'Itsok, Dr. Stephen',
      cost: 1.0
    }
  ];

  paymentTypes = ['Cash', 'Credit', 'Lines of Code'];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.addressFormGroup = this._formBuilder.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required]
    });
    this.paymentFormGroup = this._formBuilder.group({
      paymentOption: ['', Validators.required]
    });
  }

  processStepperData() {
    console.log('submitted');
    console.log('order form ', this.itemsInCart);
    console.log('add form grou ', this.addressFormGroup.value);
    console.log('pay form ', this.paymentFormGroup.value);
  }
}
