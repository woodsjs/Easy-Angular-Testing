import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-secondary',
  templateUrl: './secondary.component.html',
  styleUrls: ['./secondary.component.css']
})
export class SecondarySpiesComponent implements OnInit {

  @Input() pickle: { type: string, taste: string, smell: string};
  constructor() { }

  ngOnInit() {
  }

}
