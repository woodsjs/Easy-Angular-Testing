import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-expansion-panel-ut',
  templateUrl: './tab-expansion-panel-ut.component.html',
  styleUrls: ['./tab-expansion-panel-ut.component.css']
})
export class TabExpansionPanelUtComponent implements OnInit {
  beefMenu = [
    { name: 'Filet', description: 'Yummy', img: '' },
    { name: 'T-bone', description: 'Good', img: '' }
  ];

  chickenMenu = [
    { name: 'Grilled breast', description: 'Yummy', img: '' },
    { name: 'Fried drumsticks', description: 'Good', img: '' }
  ];

  porkMenu = [
    { name: 'Tenderloin Medalliion', description: 'Yummy', img: '' },
    { name: 'Steak', description: 'Good', img: '' }
  ];
  constructor() {}

  ngOnInit() {}
}
