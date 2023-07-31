import { Component, EventEmitter } from '@angular/core';

interface Shorts {
  image : string;
  title : string;
  price : number;
  brand : string;
}

@Component({
  selector: 'app-shorts-page',
  templateUrl: './shorts-page.component.html',
  styleUrls: ['./shorts-page.component.scss']
})
export class ShortsPageComponent {

  shorts : Shorts[] = [
    {
      image : "/assets/images/shorts-1.jfif",
      title : 'Nike black',
      price :  49.99,
      brand : '/assets/images/nike-icon.png',
    },
    {
      image : "/assets/images/shorts-8.jpg",
      title : 'Puma PSG',
      price :  99.99,
      brand : '/assets/images/puma-icon.png',
    },
    {
      image : "/assets/images/shorts-2.jpg",
      title : 'Nike dark green',
      price :  39.99,
      brand : '/assets/images/nike-icon.png',
    },
    {
      image : "/assets/images/shorts-4.jpg",
      title : 'adidas white',
      price :  69.99,
      brand : '/assets/images/adidas-icon.png',
    },
    {
      image : "/assets/images/shorts-3.jfif",
      title : 'Nike dark blue',
      price :  44.99,
      brand : '/assets/images/nike-icon.png',
    },
    {
      image : "/assets/images/shorts-5.jfif",
      title : 'adidas black',
      price :  29.99,
      brand : '/assets/images/adidas-icon.png',
    },
    {
      image : "/assets/images/shorts-6.jfif",
      title : 'adidas light grey',
      price :  29.99,
      brand : '/assets/images/adidas-icon.png',
    },
    {
      image : "/assets/images/shorts-7.jpg",
      title : 'Puma red',
      price :  59.99,
      brand : '/assets/images/puma-icon.png',
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
