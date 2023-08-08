import { Component } from '@angular/core';
import { CartService } from '../cart-page/cart.service';
import { BallService } from '../cart-page/ball.service';

@Component({
  selector: 'app-cart-length',
  templateUrl: './cart-length.component.html',
  styleUrls: ['./cart-length.component.scss']
})
export class CartLengthComponent {

  constructor(private cartService : CartService, private ballService : BallService){}

  ngOnInit():void {}

  getCart(){
    return this.cartService.get();
  }
  getBall(){
    return this.ballService.getB();
  }

}
