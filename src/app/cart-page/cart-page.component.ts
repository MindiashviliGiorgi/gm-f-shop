import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { BallService } from './ball.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {

  constructor(private cartService : CartService, private ballService : BallService){}

  ngOnInit():void {}

  getCart(){
    return this.cartService.get();
  }
  getCartB(){
    return this.ballService.getB();
  }

  isEmpty : boolean = false;
  

}
