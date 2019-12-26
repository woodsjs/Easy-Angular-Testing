import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ut',
  templateUrl: './card-ut.component.html',
  styleUrls: ['./card-ut.component.css']
})
export class CardUtComponent implements OnInit {
  cardOne = {
    img: '../../../assets/images/gray-foods-on-wicker-baskets.png',
    title: 'Little Boulangerie',
    subtitle: 'Bread and Baked Goods',
    content: 'Little home bakery specializing in breads and sweet treats.'
  };

  cardTwo = {
    img: '../../../assets/images/gray-foods-on-wicker-baskets.png',
    avatar: '../../../assets/images/face.jpg',
    title: 'Stucky Jim',
    subtitle: 'Available',
    content:
      'Sitting at Little Boulangerie having an espresso and some pain au chocolate!'
  };

  cardThree = {
    img: '../../../assets/images/gray-foods-on-wicker-baskets.png',
    avatar: '../../../assets/images/face.jpg',
    title: 'Stucky Jim',
    subtitle: 'Offline',
    content: 'What an experience!'
  };

  constructor() {}

  ngOnInit() {}

  makeReservation() {
    console.log('Reserve');
  }

  messageUser() {
    console.log('Message user');
  }
}
