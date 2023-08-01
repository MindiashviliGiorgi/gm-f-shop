import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CleatsService } from './cleats.service';
import { Cleat } from '../types/Cleats';





@Component({
  selector: 'app-cleats-page',
  templateUrl: './cleats-page.component.html',
  styleUrls: ['./cleats-page.component.scss']
})
export class CleatsPageComponent {

  constructor(private cleatsService : CleatsService) {}

  ngOnInit() : void {
    this.cleats = this.cleatsService.getCleats();
    this.listRow = true;
  };

  cleats: Cleat[] = [];


  
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
