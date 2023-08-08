import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-cleats-page',
  templateUrl: './page-cleats-page.component.html',
  styleUrls: ['./page-cleats-page.component.scss']
})
export class PageCleatsPageComponent {

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
