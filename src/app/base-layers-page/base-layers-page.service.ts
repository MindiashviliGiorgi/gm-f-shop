import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class BaseLayersPageService {
  constructor () {}

  getBaseLayers(){
    return [
      {
        image : "/assets/images/base-5.jpeg",
        title : 'Puma black',
        price :  45.99,
        brand : '/assets/images/puma-icon.png',
      },
      {
        image : "/assets/images/base-1.jfif",
        title : 'Nike black',
        price :  39.99,
        brand : '/assets/images/nike-icon.png',
      },
      {
        image : "/assets/images/base-3.jpg",
        title : 'adidas black',
        price :  39.99,
        brand : '/assets/images/adidas-icon.png',
      },
      {
        image : "/assets/images/base-4.jpg",
        title : 'adidas black 2.0',
        price :  29.99,
        brand : '/assets/images/adidas-icon.png',
      },
    ]
  }
}