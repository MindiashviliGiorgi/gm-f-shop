import { Injectable } from '@angular/core';
import { Ball } from '../types/Ball';

@Injectable({
  providedIn: 'root'
})
export class BallsPageService {
  removeB(ball: Ball) {
    throw new Error('Method not implemented.');
  }
  addB(ball: Ball) {
    throw new Error('Method not implemented.');
  }
  remove(ball: Ball) {
    throw new Error('Method not implemented.');
  }
  add(ball: Ball) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getBalls(){
    return [
      {
        image : "/assets/images/ball-1.png",
        title : 'Nike Ball Hub',
        price :  149.99,
        brand : '/assets/images/nike-icon.png',
      },
      {
        image : "/assets/images/ball-2.png",
        title : 'Nike Ball Hub Premier League',
        price :  74.99,
        brand : '/assets/images/nike-icon.png',
      },
      {
        image : "/assets/images/ball4.jpg",
        title : 'SKY GOLD |World Cup 2022 Football',
        price :  200.00,
        brand : '/assets/images/adidas-icon.png',
      },
      {
        image : "/assets/images/ball-5.jpg",
        title : 'Puma Orbita 2',
        price :  189.99,
        brand : '/assets/images/puma-icon.png',
      },
      {
        image : "/assets/images/ball-6.jpg",
        title : 'Nike Premier League Strike',
        price :  129.99,
        brand : '/assets/images/nike-icon.png',
      },
      {
        image : "/assets/images/jabulani.jpg",
        title : 'JABULANI',
        price :  499.99,
        brand : '/assets/images/adidas-icon.png',
      },
    ]
  }

}
