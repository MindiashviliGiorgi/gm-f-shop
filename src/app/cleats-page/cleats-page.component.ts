import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cleat } from '../types/Cleat';
import { CleatsPageService } from './cleats-page.service';


@Component({
  selector: 'app-cleats-page',
  templateUrl: './cleats-page.component.html',
  styleUrls: ['./cleats-page.component.scss']
})
export class CleatsPageComponent {

  cleats: Cleat[] = [];

  constructor(private cleatsPageService : CleatsPageService) {}

  ngOnInit() : void {
    this.listRow = true;
    this.cleats = this.cleatsPageService.getCleats()
  };
 

  // cart : Cleat[] = [];

  // addToCard(cleat : Cleat){
  //   console.log(cleat)
  // }


  
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
