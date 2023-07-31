import { Component, EventEmitter } from '@angular/core';

interface Jerseys {
  image : string;
  title : string;
  price : number;
  brand : string;
}

@Component({
  selector: 'app-jersey-page',
  templateUrl: './jersey-page.component.html',
  styleUrls: ['./jersey-page.component.scss']
})
export class JerseyPageComponent {

  jerseys : Jerseys[] = [
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
