import { Component, EventEmitter } from '@angular/core';
import { BallsPageService } from './balls-page.service';

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

  balls : Balls[] = [];
    

  constructor(private ballsPageService : BallsPageService) {}

  ngOnInit() : void {
    this.listRow = true;
    this.balls = this.ballsPageService.getBalls()
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
