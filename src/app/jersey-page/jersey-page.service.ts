import { Injectable } from '@angular/core';
import { Jersey } from '../types/Jersey';

@Injectable({
  providedIn: 'root'
})
export class JerseyPageService {
  removeJersey(jersey: Jersey) {
    throw new Error('Method not implemented.');
  }
  addJersey(jersey: Jersey) {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getJerseys(){
    return [
      {
        image : "/assets/images/jersey-1.jpg",
        title : 'Ronaldo Portugal',
        price :  99.99,
        brand : '/assets/images/nike-icon.png',
      },
      {
        image : "/assets/images/jersey-2.jpg",
        title : 'Messi Argentina',
        price :  99.99,
        brand : '/assets/images/adidas-icon.png',
      },
      {
        image : "/assets/images/jersey-3.jpg",
        title : 'Neymar PSG',
        price :  150.00,
        brand : '/assets/images/nike-icon.png',
      },
      {
        image : "/assets/images/jersey-4.jpg",
        title : 'Liverpool',
        price :  79.99,
        brand : '/assets/images/puma-icon.png',
      },
      {
        image : "/assets/images/jersey-5.jpg",
        title : 'Mbappe PSG',
        price :  259.99,
        brand : '/assets/images/nike-icon.png',
      },
    ]
  }

}
