import { Component, EventEmitter } from '@angular/core';
import { BaseLayersPageService } from './base-layers-page.service';
import { BaseLayer } from '../types/BaseLayer';

@Component({
  selector: 'app-base-layers-page',
  templateUrl: './base-layers-page.component.html',
  styleUrls: ['./base-layers-page.component.scss']
})
export class BaseLayersPageComponent {

  baseLayers : BaseLayer[] = [];

  constructor(private baseLayerService : BaseLayersPageService){
    
  }

  ngOnInit() : void {
    this.listRow = true;
    this.baseLayers = this.baseLayerService.getBaseLayers(); 
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
