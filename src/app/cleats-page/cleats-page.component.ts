import { Component, EventEmitter, Output } from '@angular/core';

interface Cleats {
  image : string;
  title : string;
  price : string;
  brand : string;
}

@Component({
  selector: 'app-cleats-page',
  templateUrl: './cleats-page.component.html',
  styleUrls: ['./cleats-page.component.scss']
})
export class CleatsPageComponent {

  cleats: Cleats[] = [
    {
      image : "/assets/images/container-1.jpg",
      title : 'adidas Freak Spark',
      price : '$250.00',
      brand : '/assets/images/adidas-icon.png',
    },
    {
      image : "/assets/images/container-2.jpg",
      title : 'Puma One 20.1 FG/AG',
      price : '$200.00',
      brand : '/assets/images/puma-icon.png',
    },
    {
      image : "/assets/images/container-3.jpg",
      title : 'Puma Ultra Pro FG/AG',
      price : '$190.00',
      brand : '/assets/images/puma-icon.png',
    },
    {
      image : "/assets/images/container-4.jpg",
      title : 'Puma Future Match FG/AG',
      price : '$99.00',
      brand : '/assets/images/puma-icon.png',
    },
    {
      image : "/assets/images/container-5.jpg",
      title : 'adidas Edge.2 Predator Firm Ground',
      price : '$90.00',
      brand : '/assets/images/adidas-icon.png',
    },
    {
      image : "/assets/images/container-6.jpg",
      title : 'Puma Ultra Match FG/AG',
      price : '$120.00',
      brand : '/assets/images/puma-icon.png',
    },
    {
      image : "/assets/images/container-7.jpg",
      title : 'adidas X Speedportal Flexible Ground',
      price : '$150.00',
      brand : '/assets/images/adidas-icon.png',
    },
    {
      image : "/assets/images/container-8.jpg",
      title : 'Nike Zoom Superfly 9 Pro FG ',
      price : '$390.00',
      brand : '/assets/images/nike-icon.png',
    },
    {
      image : "/assets/images/container-9.jpg",
      title : 'Nike Zoom Mercurial',
      price : '$290.00',
      brand : '/assets/images/nike-icon.png',
    },
    {
      image : "/assets/images/container-10.jpg",
      title : 'Nike Air Zoom Mercurial Superfly 9 Elite',
      price : '$470.00',
      brand : '/assets/images/nike-icon.png',
    },
    {
      image : "/assets/images/container-11.jpg",
      title : 'adidas Predator Accuracy',
      price : '$200.00',
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
