import { Component, Input } from '@angular/core';
import { CartService } from './cart.service';
import { BallService } from './ball.service';
import { JerseyService } from './jersey.service';
import { Cleat } from '../types/Cleat';
import { Jersey } from '../types/Jersey';
import { ShortService } from './short.service';
import { BaseLayerService } from './baseLayer.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  constructor(
    private cartService : CartService,
    private ballService : BallService,
    private jerseyService : JerseyService,
    private shortService : ShortService,
    private baseLayerService : BaseLayerService
    ){}

  ngOnInit():void {
  }

  // itemArray : Array = [
  //   { id: 1, value: 23 },
  //   { id: 2, value: 30 },
  //   { id: 3, value: 7 },
  //   { id: 4, value: 21 }
  // ];

  // sum: any = itemArray.map(a => a.value).reduce(function(a, b)
  // {
  //   return a + b;
  // });
  // console.log(sum);
  // // expected output: 81

  numbers: number[] = [1, 2, 3, 4, 5];

// Using map and reduce
  sum: number = this.numbers.reduce((acc, num) => acc + num, 0);

  


  @Input() jersey : Jersey = {} as Jersey;

  getCart(){
    return this.cartService.get();
  }
  getCartB(){
    return this.ballService.getB();
  }
  getJerseyS(){
    return this.jerseyService.getJersey();
  }
  getShorts(){
    return this.shortService.getShort();
  }
  getBaseLayers(){
    return this.baseLayerService.get();
  }
  


  isEmpty : boolean = false;
  

}
