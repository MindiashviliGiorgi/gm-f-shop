import { Component } from '@angular/core';
import { CartService } from '../cart-page/cart.service';

@Component({
  selector: 'app-cart-length',
  templateUrl: './cart-length.component.html',
  styleUrls: ['./cart-length.component.scss']
})
export class CartLengthComponent {

  constructor(private cartService : CartService){}

  ngOnInit():void {}

  getCart(){
    return this.cartService.get();
  }

}
