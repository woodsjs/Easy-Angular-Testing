import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { AutofillMonitor } from '@angular/cdk/text-field';
import { isNull } from 'util';

@Component({
  selector: 'app-input-formfield-autocomplete-ut',
  templateUrl: './input-formfield-autocomplete-ut.component.html',
  styleUrls: ['./input-formfield-autocomplete-ut.component.css'],
})
export class InputFormfieldAutocompleteUtComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  addressForm: FormGroup;

  options = [
    {
      state: 'Alabama',
      city: ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile'],
    },
    { state: 'Alaska', city: ['Anchorage'] },
    { state: 'Arizona', city: ['Phoenix', 'Tucson', 'Mesa', 'Chandler'] },
    { state: 'Arkansas', city: ['Little Rock'] },
    {
      state: 'California',
      city: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco'],
    },
    { state: 'Colorado', city: ['Denver', 'Colorado Springs', 'Aurora'] },
    { state: 'Connecticut', city: ['Bridgeport', 'New Haven', 'Stamford'] },
    { state: 'District of Columbia', city: ['Washington'] },
    { state: 'Florida', city: ['Jacksonville', 'Miami', 'Tampa', 'Orlando'] },
    { state: 'Georgia', city: ['Atlanta', 'Augusta', 'Columbus'] },
    { state: 'Hawaii', city: ['Honolulu'] },
    { state: 'Idaho', city: ['Boise'] },
    { state: 'Illinois', city: ['Chicago', 'Aurora', 'Naperville', 'Joliet'] },
    { state: 'Indiana', city: ['Indianapolis', 'Fort Wayne'] },
    { state: 'Iowa', city: ['Des Moines', 'Cedar Rapids'] },
    { state: 'Kansas', city: ['Wichita', 'Overland Park', 'Kansas City'] },
    { state: 'Kentucky', city: ['Louisville', 'Lexington'] },
    { state: 'Louisiana', city: ['New Orleans', 'Baton Rouge'] },
    { state: 'Maryland', city: ['Baltimore'] },
    { state: 'Massachusetts', city: ['Boston'] },
    { state: 'Michigan', city: ['Detroit', 'Grand Rapids'] },
    { state: 'Minnesota', city: ['Minneapolis', 'Saint Paul'] },
    { state: 'Mississippi', city: ['Jackson'] },
    { state: 'Missouri', city: ['Kansas City', 'St. Louis'] },
    { state: 'Montana', city: ['Billings'] },
    { state: 'Nebraska', city: ['Omaha'] },
    { state: 'Nevada', city: ['Las Vegas'] },
    { state: 'New Hampshire', city: ['Manchester'] },
    { state: 'New Jersey', city: ['Newark', 'Jersey City'] },
    { state: 'New Mexico', city: ['Albuquerque'] },
    { state: 'New York', city: ['New York', 'Buffalo'] },
    { state: 'North Carolina', city: ['Charlotte', 'Raleigh', 'Greensboro'] },
    { state: 'North Dakota', city: ['Fargo'] },
    { state: 'Ohio', city: ['Columbus', 'Cleveland', 'Cincinnati'] },
    { state: 'Oklahoma', city: ['Oklahoma City', 'Tulsa'] },
    { state: 'Oregon', city: ['Portland', 'Salem'] },
    { state: 'Pennsylvania', city: ['Philadelphia', 'Pittsburgh'] },
    { state: 'Rhode Island', city: ['Providence'] },
    { state: 'South Carolina', city: ['Charleston'] },
    { state: 'South Dakota', city: ['Sioux Falls'] },
    {
      state: 'Tennessee',
      city: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
    },
    { state: 'Texas', city: ['Houston', 'San Antonio', 'Dallas'] },
    { state: 'Utah', city: ['Salt Lake City'] },
    { state: 'Virginia', city: ['Virginia Beach', 'Norfolk'] },
    { state: 'Washington', city: ['Seattle', 'Spokane'] },
    { state: 'Wisconsin', city: ['Milwaukee', 'Madison', 'Green Bay'] },
  ];

  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.addressForm = this.fb.group({
      nameField: [''],
      cityField: [''],
      stateField: [''],
    }, {validators: [this.validateCity]});

    this.filteredOptions = this.addressForm.controls.stateField.valueChanges.pipe(
      startWith(''),
      map((value) => this._filterState(value))
    );
  }

  onSubmit() {
    console.log('Submitted ', this.addressForm.value);
  }

  private _filterState(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options
      .map((option) => option.state)
      .filter((option) => option.toLowerCase().includes(filterValue));
  }


  // This wouldn't be nice in the real world
  // We're basically having the user blindly type a city, and
  // then hope that the city is defined for the state
  // But it DOES show us a neat way to do build a validator
  validateCity = (control: FormGroup) => {
    const stateValue = control.get('stateField');
    const cityValue = control.get('cityField');
    let cityOptions;

    if (stateValue.value !== null) {
      cityOptions = this.options.filter((option) =>
        option.state.toLowerCase().includes(stateValue.value.toLowerCase())
      )[0].city;
    }

    return stateValue &&
      cityValue &&
      !cityOptions.includes(cityValue.value)
      ? {noMatchingCity: 'The state has no city by that name defined'}
      : null;
  }
}
