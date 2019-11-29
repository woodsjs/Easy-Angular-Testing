import { Component, OnInit } from '@angular/core';

@Component({
  selector: "app-dialog-ut",
  templateUrl: "./dialog-ut.component.html",
  styleUrls: ["./dialog-ut.component.css"]
})
export class DialogUtComponent implements OnInit {
  ourItems = ["thing one", "thing two", "thing three"];

  constructor() {}

  ngOnInit() {}
  
  getThings() {}
}
