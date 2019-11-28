import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-ut',
  templateUrl: './list-ut.component.html',
  styleUrls: ['./list-ut.component.css']
})
export class ListUtComponent implements OnInit {
  // this would be the data sent back from our API. Since we're doing this for the
  // tests we're skipping the service here.
  apiReturnedAnimals = [
    {
      name: 'Blue Bull',
      description: 'This is a Blue Bull',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/1000BlueBull.jpg',
      category: 'land'
    },
    {
      name: 'Cervus',
      description: 'This is a Cervus',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/102Cervus.jpg',
      category: 'land'
    },
    {
      name: 'Black Buck',
      description: 'This is a Black Buck',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/10BlackBuck.jpg',
      category: 'land'
    },
    {
      name: 'Mynah',
      description: 'This is a Mynah',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/3617brahminy-mynah.jpg',
      category: 'air'
    },
    {
      name: 'Malabar Parkeet',
      description: 'This is a parkeet',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/7/71/2005-malabar-parkeet-p.jpg',
      category: 'air'
    }
  ];

  public listData;
  public listType;
  public singleTypeAnimals: boolean;
  constructor() {}

  ngOnInit() {
    // start showing everything.
    this.showAllAnimals();
  }

  getAllAnimals() {
    return this.apiReturnedAnimals;
  }

  getAnimalsByType(animalType: string) {
    this.listData = this.getAllAnimals();
    return this.listData.filter(animal => animal.category === animalType);
  }

  showFilteredAnimals(animalType: string) {
    this.listType = animalType;
    this.listData = this.getAnimalsByType(animalType);
  }

  showAllAnimals() {
    this.listType = 'all';
    this.listData = this.getAllAnimals();
  }
}
