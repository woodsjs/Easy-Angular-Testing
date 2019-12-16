import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable-ut',
  templateUrl: './datatable-ut.component.html',
  styleUrls: ['./datatable-ut.component.css']
})
export class DatatableUtComponent implements OnInit {
  displayedColumns: string[] = ['name', 'type', 'size'];
  ourAnimals = [
    {
      name: 'Bear',
      type: 'animal',
      size: 'large'
    },
    {
      name: 'Dog',
      type: 'animal',
      size: 'medium'
    },
    {
      name: 'Cat',
      type: 'animal',
      size: 'small'
    },
    {
      name: 'Elephant',
      type: 'animal',
      size: 'xLarge'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
