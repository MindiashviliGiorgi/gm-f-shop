import { Component, EventEmitter } from '@angular/core';

interface BaseLayers {
  image:string;
  title:string;
  price:number;
  brand:string;
}

@Component({
  selector: 'app-base-layers-page',
  templateUrl: './base-layers-page.component.html',
  styleUrls: ['./base-layers-page.component.scss']
})
export class BaseLayersPageComponent {

  baseLayers : BaseLayers[] = [
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
