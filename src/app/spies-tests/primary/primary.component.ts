import { Component, OnInit } from '@angular/core';
import { TargetSpiesService } from '../target.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimarySpiesComponent implements OnInit {
  public thesePickles;
  private subscription: Subscription;

  constructor(private pickleFactory: TargetSpiesService) {}

  ngOnInit() {
    this.subscription = this.pickleFactory
      .getPickleUpdateListener()
      .subscribe(pickles => (this.thesePickles = pickles));
    this.thesePickles = this.pickleFactory.allPickles();
  }
  
  addPickle() {
    this.pickleFactory.addPickle({ type: 'Unknown', taste: 'Unknown', smell: 'Unknown'});
    console.log('Pickle added');
  }
}
