import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-activatedroute-test-comp',
  templateUrl: './activatedroute-test.html',
  styleUrls: ['./activatedroute-test.css']
})
export class ActivatedRouteTestCompComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {});
  }
}
