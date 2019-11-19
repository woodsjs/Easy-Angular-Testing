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
      avatar: 'https://commons.wikimedia.org/wiki/File:1000BlueBull.jpg',
      category: 'land'
    },
    {
      name: 'Cervus',
      description: 'This is a Cervus',
      avatar: 'https://commons.wikimedia.org/wiki/File:102Cervus.jpg',
      category: 'land'
    },
    {
      name: 'Black Buck',
      description: 'This is a Black Buck',
      avatar: 'https://commons.wikimedia.org/wiki/File:10BlackBuck.jpg',
      category: 'land'
    },
    {
      name: 'item four',
      description: 'This is item four',
      avatar: 'https://commons.wikimedia.org/wiki/File:3617brahminy-mynah.jpg',
      category: 'air'
    },
    {
      name: 'item five',
      description: 'This is item five',
      avatar:
        'https://commons.wikimedia.org/wiki/File:2005-malabar-parkeet-p.jpg',
      category: 'air'
    }
  ];

  public listData;
  public listType;

  constructor() {}

  ngOnInit() {}

  getLandAnimals( animalType: string ) {
    return this.apiReturnedAnimals.filter((animal) => animal.category === animalType );
  }

  showFilteredAnimals( animalType: string ) {
    // this is where we build pass our data to our list
    this.listData = this.getLandAnimals(animalType);
    this.listType = animalType;
  }
}
