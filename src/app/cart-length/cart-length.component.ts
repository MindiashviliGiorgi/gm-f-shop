import { Component } from '@angular/core';
import { CartService } from '../cart-page/cart.service';
import { BallService } from '../cart-page/ball.service';
import { JerseyService } from '../cart-page/jersey.service';
import { ShortService } from '../cart-page/short.service';
import { BaseLayerService } from '../cart-page/baseLayer.service';

@Component({
  selector: 'app-cart-length',
  templateUrl: './cart-length.component.html',
  styleUrls: ['./cart-length.component.scss']
})
export class CartLengthComponent {

  constructor(
    private cartService : CartService,
    private ballService : BallService,
    private jerseyService : JerseyService,
    private shortService : ShortService,
    private baseLaeyrService : BaseLayerService
    ){}

  ngOnInit():void {}

  getCart(){
    return this.cartService.get();
  }
  getBall(){
    return this.ballService.getB();
  }
  getjerseyS(){
    return this.jerseyService.getJersey();
  }
  getShorts(){
    return this.shortService.getShort();
  }
  getBaseLayers(){
    return this.baseLaeyrService.get();
  }

}
