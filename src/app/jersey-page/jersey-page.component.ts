import { Component, EventEmitter } from '@angular/core';
import { JerseyPageService } from './jersey-page.service';
import { Jersey } from '../types/Jersey';

@Component({
  selector: 'app-jersey-page',
  templateUrl: './jersey-page.component.html',
  styleUrls: ['./jersey-page.component.scss']
})
export class JerseyPageComponent {

  jerseys : Jersey[] = [];

  constructor(private jerseysService : JerseyPageService) {}

  ngOnInit() : void {
    this.listRow = true;
    this.jerseys = this.jerseysService.getJerseys();
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
