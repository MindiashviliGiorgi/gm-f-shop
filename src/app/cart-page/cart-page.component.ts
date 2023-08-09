import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { BallService } from './ball.service';
import { JerseyService } from './jersey.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  constructor(private cartService : CartService, private ballService : BallService, private jerseyService : JerseyService){}

  ngOnInit():void {}

  getCart(){
    return this.cartService.get();
  }
  getCartB(){
    return this.ballService.getB();
  }
  getJerseyS(){
    return this.jerseyService.getJersey();
  }


  isEmpty : boolean = false;
  

}
