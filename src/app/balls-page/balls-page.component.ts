import { Component, EventEmitter } from '@angular/core';

interface Balls {
  image : string;
  title : string;
  price : number;
  brand : string;
}


@Component({
  selector: 'app-balls-page',
  templateUrl: './balls-page.component.html',
  styleUrls: ['./balls-page.component.scss']
})
export class BallsPageComponent {

  balls: Balls[] = [
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
    

  ];

  constructor() {}

  ngOnInit() : void {
    this.listRow = true;
  };

  listRow:boolean = true;
  listColumn:boolean = false;

  listChangeColumn(){
    this.listRow = false;
    this.listColumn = true;
  }
  listChangeRow(){
    this.listRow = true;
    this.listColumn = false;
  }

  searchValue:string = '';
  searchBrandValue:string = '';

  searchTextChange : EventEmitter<string> = new EventEmitter<string>();
  searchItem(){
    this.searchTextChange.emit(this.searchValue)
  }

  searchBrand : EventEmitter<string> = new EventEmitter<string>();
  searchItemBrand(){
    this.searchBrand.emit(this.searchBrandValue)
  }


}
