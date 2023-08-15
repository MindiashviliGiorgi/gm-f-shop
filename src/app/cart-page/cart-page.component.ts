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

  items : Array<Cleat> = [];

  sum(){
    let result = 0;

    let cleatsList = this.cartService.get();
    cleatsList.forEach(a => result += a.price);

    let ballsList = this.ballService.getB();
    ballsList.forEach(x => result += x.price);

    let jerseysList = this.jerseyService.getJersey();
    jerseysList.forEach(z => result += z.price);

    let shortsList = this.shortService.getShort();
    shortsList.forEach(s => result += s.price);

    let beseLayersList = this.baseLayerService.get();
    beseLayersList.forEach(b => result += b.price)


    return result
  }


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
